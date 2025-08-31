import Baxi from "../../modules/baxi.module";
import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"
countries.registerLocale(enLocale)
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

export const PurchaseEslectric = async ({
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

export const FetchInternationalCountries = async () => {
  try {
    const [response1,response2] = await Promise.all([
      Baxi.internationalAirtimeCountry({page:1}),
      Baxi.internationalAirtimeCountry({page:2})
    ])
    if ((!response1 || response1.status !== "success") ||(!response2 || response2.status !== "success") ) {
      return {
        code: 500,
        success: false,
        message: "Unable to fetch international countries at the moment. Please try again later.",
        data: null,
      };
    }
    
    const [data1,data2] = await Promise.all([formatCountryData(response1.data),formatCountryData(response2.data)])
    const mergedArray = [...data1,...data2]

    return {
      code: 200,
      success: true,
      message: "Successfully Returned",
      data: mergedArray,
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      message: "Failed to retrieve international Countries due to a technical error. Please try again later.",
      data: null,
    };
  }
};

export const FetchInternationalOperator = async ({countryCode}:{countryCode:string}) => {
  try {
    const response = await Baxi.internationalAirtimeOperator({countryCode});
    console.log(response)
    if (!response || response.status !== "success") {
      return {
        code: 500,
        success: false,
        message: "Unable to fetch international Operators at the moment. Please try again later.",
        data: null,
      };
    }
    return {
      code: 200,
      success: true,
      message: "Successfully Returned",
      data:response.data,
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      message: "Failed to retrieve international Operators due to a technical error. Please try again later.",
      data: null,
    };
  }
};

export const FetchInternationalProducts = async ({countryCode,operatorId}:{countryCode:string,operatorId:number}) => {
  try {
    const response = await Baxi.internationalAirtimeProducts({countryCode,operatorId});
    console.log(response.data.products)
    if (!response || response.status !== "success") {
      return {
        code: 500,
        success: false,
        message: "Unable to fetch international Airtime Products at the moment. Please try again later.",
        data: null,
      };
    }
    return {
      code: 200,
      success: true,
      message: "Successfully Returned",
      data:response.data,
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      message: "Failed to retrieve international Airtime Products  due to a technical error. Please try again later.",
      data: null,
    };
  }
};

export const VerifyIntl = async ({
  countryCode,
  number,
}: {
  countryCode: string;
  number: string;
}) => {
  try {
    const response = await Baxi.verifyInternationalName({countryCode , accountNumber:number });
    console.log(response.data.user.info)
    if (!response || response.status !== "success") {
      return {
        code: 500,
        success: false,
        message: "Unable to verify This country and Phone number. Please check the details and try again.",
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


interface country {
  name: string;
  code: string;
  emoji: string;
}

 async function formatCountryData(dataArray:country[]) {
  const remapped:country[] = [];

  for (const country of dataArray) {
    const { name, code } = country; // e.g. "IND"
    const alpha2 = countries.alpha3ToAlpha2(code);

    if (!alpha2) {
      console.warn(`Unknown alpha-3 code: ${code}`);
      continue; // Skip or handle fallback
    }

    const emoji = alpha2
      .toUpperCase()
      .replace(/./g, (c:string) => String.fromCodePoint(127397 + c.charCodeAt(0)));

    remapped.push({
      name,
      code,
      emoji,
    });
  }

  return remapped;
}
