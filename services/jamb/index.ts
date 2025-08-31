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
const myCache = new NodeCache();

export const PurchaseJamb = async ({
  userid,
  productCode,
  account,
  phone
}: {
  userid: string;
  productCode: string;
  phone: string;
  account: string;
}) => {
  let deductedAmount = 0;
  try {
    const lockExists = myCache.get(`jambtransactionLocks:${userid}`);
    if (lockExists) {
      console.log("Existing Transaction in progress");
      return {
        code: 429,
        success: false,
        message: "Too Many Requests, Try again later",
        data: null,
      };
    }
    myCache.set(`jambtransactionLocks:${userid}`, "locked", 10);
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
    const balance = Number(credit);
    if (isNaN(balance) || !balance) {
      return new ApiError({
        message: "Internal server error, Try again later",
      });
    }
    const amount = await Baxi.verifyJambPrice({ provider:"jamb", productCode});
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
      return new ApiError({ code: 403, message: "Oops! Your wallet balance is too low for this purchase." });
    }
    await deductUserBalance({ amount, userid });
    deductedAmount = amount;
    const response = await Baxi.vendJamb({
      amount,
      accountNumber:account,
      productCode,
      phone
    });
    console.log(response)

    if (response.status === "success" || Number(response.code) === 200) {
      await createTransaction({
        userid,
        amount,
        email,
        recipient: account,
        reference:response.data.baxiReference,
        provider:"Jamb",
        status: response.status,
        service: "jamb",
        name:`${productCode} Jamb Purchase`
      });
      // Points(userid, amount, email);
      return new ApiResponse({
        message: `Your ${productCode} Jamb Purchase was successful`,
      });
    } else {
      await addUserBalance({ amount: deductedAmount, userid });
      console.error("External API error:", response.status);
      return new ApiError({ message: `${productCode} Jamb Purchase ${response.status}` });
    }
  } catch (error) {
    await addUserBalance({ amount: deductedAmount, userid });
    console.error(error.response?.data);
    return new ApiError({
      message: `${productCode} Jamb Purchase failed due to internal server error`,
    });
  } finally {
    myCache.del(`jambtransactionLocks:${userid}`);
  }
};

export const FetchJamb = async () => {
  try {
    const response = await Baxi.getJambBundles();
    console.log(response)
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

export const VerifyJamb = async ({
  account,
  productCode
}: {
  account: string;
    productCode: string;
}) => {
  try {
    const response = await Baxi.verifyJambName({productCode, accountNumber:account });
    console.log(response)
    if (!response || response.status !== "success") {
      return {
        code: 500,
        success: false,
        message: response.message || "Request Failed, Try again later",
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