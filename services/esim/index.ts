import Vendify from "../../modules/vend.module";
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

export const PurchaseEsim = async ({
  userid,
  name,
  productId,
  country,
  countrycode,
  productCode,
  walletId,
  providerId,
  phone,
  value
}: {
  userid: string,
  name:string,
  country:string,
  countrycode:string,
  productId:number,
  productCode:string,
  walletId:number,
  providerId:number,
    phone: string,
    value: number
}) => {
  let deductedAmount = 0;
  try {
    const lockExists = myCache.get(`esimtransactionLocks:${userid}`);
    if (lockExists) {
      return {
        code: 429,
        success: false,
        message: "Too Many Requests, Try again later",
        data: null,
      };
    }
    myCache.set(`esimtransactionLocks:${userid}`, "locked", 10);
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

    const amount = await Vendify.verifyEsimPrice({ country:countrycode, productID:productId });
    if(!amount || amount === null || amount === undefined ){
      return new ApiError({
        message: "Couldn't process transaction, Please Try again later",
      });
    }
    // if (amount > 9999) {
    //   console.error("This user just exceeded 10k transaction");
    //   return new ApiError({
    //     code: 403,
    //     message: "You're not cleared for transactions over 10,000 Naira",
    //   });
    // }

    if (amount > balance) {
      return new ApiError({ code: 403, message: "Your current balance is too low to complete this transaction." });
    }

    await deductUserBalance({ amount, userid });
    deductedAmount = amount;
    const response = await Vendify.purchaseEsim({
      providerID:providerId,
      productCode,
      Account:phone,
      value,
      productID:productId,
      walletID:String(walletId),
    });
    console.log(response)
    await createTransaction({
      userid,
      amount,
      email,
      recipient: phone,
      plan:name,
      reference:response.sysId,
      provider:country,
      name:`${name} Esim Purchase`,
      status: response.response.responseStatus,
      service: "esim",
    });

    if (response.response.responseStatus.toLowerCase() === "success") {
      await createNotification({
        userid,
        title:`Esim Purchased Completed Successfully`,
        message:`Your ${name} eSim purchase was successful,Thank you for using our service!`,
        reference: response.sysId,
        status:"unread",
        service:"esim",
        type:"transaction"
      })
      // Points(userid, amount, email);
      return new ApiResponse({
        message: `Your Internet Purchase of ${amount} Naira to ${phone} was successful`,
      });
    } else {
      await addUserBalance({ amount: deductedAmount, userid });
      console.error("External API error:", response.status);
      return new ApiError({ message: `Esim Plan Purchase ${response.response.responseStatus}` });
    }
  } catch (error) {
    await addUserBalance({ amount: deductedAmount, userid });
    console.error(error);
    return new ApiError({
      message: "Esim purchase failed due to a technical error. Your payment has been refunded. Please try again later.",
    });
  } finally {
    myCache.del(`datatransactionLocks:${userid}`);
  }
};

export const FetchEsimProviders = async ({country}) => {
  try {
    const response = await Vendify.getEsimProviders({country})
    if (!response || response.sysErr !== 200) {
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
      data: response.response,
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
