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

export const PurchaseData = async ({
  userid,
  provider,
  phone,
  datacode,
  plan
}: {
  userid: string;
  provider: string;
  phone: string;
  datacode: string;
  plan:string
}) => {
  let deductedAmount = 0;
  try {
    const lockExists = myCache.get(`datatransactionLocks:${userid}`);
    if (lockExists) {
      return {
        code: 429,
        success: false,
        message: "Too Many Requests, Try again later",
        data: null,
      };
    }
    myCache.set(`datatransactionLocks:${userid}`, "locked", 10);
    const userData = await getUserById(userid);
    if (!userData) {
      return new ApiError({
        code: 400,
        message: "Something went wrong,Account not found",
      });
    }
    const { credit, email, ban } = userData;
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
    
    const amount = await Baxi.verifyDataPrice({ provider, datacode });
    console.log(amount)
    if(!amount ){
      return new ApiError({
        message: "Couldn't process transaction, Please Try again later",
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
      return new ApiError({ code: 403, message: "Your current balance is too low to complete this transaction." });
    }
    
    await deductUserBalance({ amount, userid });
    deductedAmount = amount;
    const response = await Baxi.purchaseData({
      provider,
      amount,
      phone,
      datacode
    });
    console.log(response)
    await createTransaction({
      userid,
      amount,
      email,
      recipient: phone,
      plan,
      reference:response.data.baxiReference,
      provider,
      name:`${provider} Data Topup`,
      status: response.status,
      service: "internet",
    });
    await createNotification({
      userid,
      title:`Internet Data Purchased Completed Successfully`,
      message:`Your ${plan} purchase was successful,Thank you for using our service!`,
      reference: response.data.baxiReference,
      status:"unread",
      service:"internet",
      type:"transaction"
    })
    if (response.status === "success") {
      // Points(userid, amount, email);
      return new ApiResponse({
        message: `Your Internet Purchase of ${amount} Naira to ${phone} was successful`,
      });
    } else {
      await addUserBalance({ amount: deductedAmount, userid });
      console.error("External API error:", response.status);
      return new ApiError({ message: `Internet Plan Purchase ${response.status}` });
    }
  } catch (error) {
    await addUserBalance({ amount: deductedAmount, userid });
    console.error(error);
    return new ApiError({
      message: "Internet purchase failed due to a technical error. Your payment has been refunded. Please try again later.",
    });
  } finally {
    myCache.del(`datatransactionLocks:${userid}`);
  }
};

export const FetchData = async ({ provider }: { provider: string }) => {
  try {
    console.log("see providr", provider);
    const response = await Baxi.getDataBundles({ provider });
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
