import Baxi from "../../modules/baxi.module";
import {
  addUserBalance,
  deductUserBalance,
  getUserById,
} from "../../repository";
import { createNotification } from "../../repository/notification.repository";
import { createTransaction } from "../../repository/transaction.repository";
import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import NodeCache from "node-cache";
const myCache = new NodeCache();

export const PurchaseCable = async ({
  userid,
  provider,
  cardnumber,
  code,
  month,
  plan
}: {
  userid: string;
  provider: string;
  month: string;
  code: string;
  cardnumber: string;
  plan: string;
}) => {
  let deductedAmount = 0;
  try {
    const lockExists = myCache.get(`cabletransactionLocks:${userid}`);
    if (lockExists) {
      console.log("Existing Transaction in progress");
      return {
        code: 429,
        success: false,
        message: "Too Many Requests, Try again later",
        data: null,
      };
    }
    myCache.set(`cabletransactionLocks:${userid}`, "locked", 10);
    const userData = await getUserById(userid);
    if (!userData) {
      return new ApiError({
        code: 400,
        message: "Something went wrong,Account not found",
      });
    }
    const { credit, email, verified, ban } = userData;
    if (ban === "yes") {
      return new ApiError({
        code: 403,
        message: "You have been banned from using Jaan services.",
      });
    }

    // if (verified === "no") {
    //   return new ApiError({
    //     code: 401,
    //     message:
    //       "Your Kyc Account has not been verified. Please go to profile to verify your Identity before proceeding with this transaction.",
    //   });
    // }
    const balance = Number(credit);

    if (isNaN(balance) || !balance) {
      return new ApiError({
        message: "Internal server error, Try again later",
      });
    }
    const amount = await Baxi.verifyCablePrice({ provider, code,months:month });
    if(!amount ){
      return new ApiError({
        message: "Unable to process transaction, Try again later",
      });
    }
    if (amount > 9999) {
      console.error("This user just exceeded 10k transaction");
      return new ApiError({
        code: 403,
        message: "You're not cleared for transactions over 10,000 Naira",
      });
    }
    if (amount > balance) {
       return new ApiError({ code: 403, message: "Oops! Your wallet balance is too low for this purchase." });
    }
    await deductUserBalance({ amount, userid });
    deductedAmount = amount;
    const response = await Baxi.purchaseCable({
      provider,
      amount,
      smartcardNumber:cardnumber,
      productCode:code,
      month:Number(month)
    });
    console.log(response)
    await createTransaction({
      userid,
      amount,
      email,
      recipient: cardnumber,
      reference: response.data.baxiReference,
      provider,
      plan:plan,
      status: response.status,
      service: "cable",
      name:`${provider} Subscription`
    });
    if (response.status === "success") {
      // Points(userid, amount, email);
      await createNotification({
        userid,
        title:`${plan} Plan Purchased`,
        message:`Your ${plan} subscription to ${cardnumber} was successful. Enjoy your viewing!`,
        reference: response.data.baxiReference,
        status:"unread",
        service:"cable",
        type:"transaction"
      })
      return new ApiResponse({
        message: `Your ${provider} Cable Topup of ${amount} Naira was successful`,
      });
    } else {
      await addUserBalance({ amount: deductedAmount, userid });
      console.error("External API error:", response.status);
      return new ApiError({ message: `${provider} Cable Topup ${response.status}` });
    }
  } catch (error) {
    await addUserBalance({ amount: deductedAmount, userid });
    console.error(error.response?.data);
    return new ApiError({
      message: `${provider} Cable Topup failed due to internal server error`,
    });
  } finally {
    myCache.del(`cabletransactionLocks:${userid}`);
  }
};

export const FetchCable = async ({ provider }: { provider: string }) => {
  try {
    console.log("see providr", provider);
    const response = await Baxi.getCableBundles({provider});
    if (!response || response.status !== "success") {
      return {
        code: 500,
        success: false,
        message: "Request Failed, Try again later",
        data: null,
      };
    }
    return {
      code: 200,
      success: true,
      message: "Successfully Returned",
      data: response.data,
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      message: "Internal Server Error, Try again later",
      data: null,
    };
  }
};
