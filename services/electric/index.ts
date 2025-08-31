import Baxi from "../../modules/baxi.module";
import {
  addUserBalance,
  deductUserBalance,
  getUserById,
} from "../../repository";
import { createTransaction } from "../../repository/transaction.repository";
import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import NodeCache from "node-cache";
import generateTransactionRef from "../../utils/generateRef";
import { Jtoken } from "../jtoken";
import { createNotification } from "../../repository/notification.repository";
const myCache = new NodeCache();

export const PurchaseElectric = async ({
  userid,
  provider,
  amount,
  phone,
  accountnumber,
  serviceType,
}: {
  userid: string;
  provider: string;
  phone: string;
  amount: number;
  accountnumber: string;
  serviceType: string;
}) => {
  let deductedAmount = 0;
  try {
    const lockExists = myCache.get(`electrictransactionLocks:${userid}`);
    if (lockExists) {
      console.log("Existing Transaction in progress");
      return {
        code: 429,
        success: false,
        message: "Another electricity purchase is currently in progress. Please wait a moment and try again.",
        data: null,
      };
    }
    myCache.set(`electrictransactionLocks:${userid}`, "locked", 10);
    const userData = await getUserById(userid);
    if (!userData) {
      return new ApiError({
        code: 400,
        message: "User account not found. Please contact support if this issue persists.",
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
        message: "Unable to retrieve account balance. Please try again in a few moments.",
      });
    }
   
    if(!amount ){
      return new ApiError({
        message: "Invalid transaction amount. Please enter a valid amount and try again.",
      });
    }

    if (amount > balance) {
      return new ApiError({ code: 403, message: "Oops! Your wallet balance is too low for this purchase." });
    }
    await deductUserBalance({ amount, userid });
    deductedAmount = amount;
    const response = await Baxi.purchaseElectric({
      provider:serviceType,
      amount,
      phone,
      accountNumber:accountnumber
    });
    console.log(response)
    if (response.status === "success") {
      await createTransaction({
        userid,
        amount,
        reference:response.data.baxiReference || generateTransactionRef(),
        email,
        recipient: accountnumber,
        provider,
        status: response.status,
        service: "electric",
        name:`${provider} Electric Topup`,
        pin:response?.data?.tokenCode || "",
        plan:response?.data?.amountOfPower || ""
      });
      await createNotification({
        userid,
        title:`Electricity Purchase Completed Successfully`,
        message:`Your ₦${amount} ${provider} purchase for ${accountnumber} was successful, Thank you for using our service!`,
        reference: response.data.baxiReference,
        status:"unread",
        service:"electric",
        type:"transaction"
      })
      Jtoken({ userid, amount, email });
      return new ApiResponse({
        message:`Your ₦${amount} electricity purchase for ${accountnumber} was successful`,
      });
    } else {
      await addUserBalance({ amount: deductedAmount, userid });
      console.error("External API error:", response.status);
      return new ApiError({ message: "Electricity purchase failed. Your payment has been refunded. Please try again or contact support if the issue persists." });
    }
  } catch (error) {
    await addUserBalance({ amount: deductedAmount, userid });
    if(error?.response){
        console.error(error.response?.data);
    }else{
      console.error(error)
    }
    return new ApiError({
      message: "Electricity purchase failed due to a technical error. Your payment has been refunded. Please try again later.",
    });
  } finally {
    myCache.del(`electrictransactionLocks:${userid}`);
  }
};

export const FetchElectric = async () => {
  try {
    const response = await Baxi.getElectricProviders();
    if (!response || response.status !== "success") {
      return {
        code: 500,
        success: false,
        message: "Unable to fetch electricity providers at the moment. Please try again later.",
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
      message: "Failed to retrieve electricity providers due to a technical error. Please try again later.",
      data: null,
    };
  }
};

export const VerifyElectric = async ({
  provider,
  number,
}: {
  provider: string;
  number: string;
}) => {
  try {
    const response = await Baxi.verifyElectricName({ provider, accountNumber:number });
    if (!response || response.status !== "success") {
      return {
        code: 500,
        success: false,
        message: "Unable to verify meter number. Please check the details and try again.",
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
      message: "Failed to verify meter number due to a technical error. Please try again later.",
      data: null,
    };
  }
};
// {
//   status: 'success',
//   message: 'Successful',
//   code: 200,
//   data: {
//     statusCode: '0',
//     transactionStatus: 'success',
//     transactionReference: '202506140807446179',
//     transactionMessage: 'Topup successful on 325456666690',
//     baxiReference: '202506140807446179',
//     provider_message: 'Topup successful on 325456666690',
//     tokenCode: '39739559205179597690',
//     tokenAmount: '1500',
//     amountOfPower: '1348.84',
//     creditToken: null,
//     rawOutput: {
//       status: 'ACCEPTED',
//       responseCode: '00',
//       energyUnits: '67.5',
//       responseData: null,
//       responseMessage: 'Success: RECEIPT NUMBER: 2201202321136731 | TOKEN DESC: 39739559205179597690 | ENERGY VALUE (NGN): Energy Value (NGN)',
//       exchangeReference: '10018445184577313490'
//     }
//   }
// }