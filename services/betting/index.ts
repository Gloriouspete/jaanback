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

export const PurchaseBetting = async ({
  userid,
  provider,
  amount,
  account,
}: {
  userid: string;
  amount: number;
  provider: string;
  account: string;
}) => {
  let deductedAmount = 0;
  try {
    const lockExists = myCache.get(`bettransactionLocks:${userid}`);
    if (lockExists) {
      console.log("Existing Transaction in progress");
      return {
        code: 429,
        success: false,
        message: "Another Betting purchase is currently in progress. Please wait a moment and try again.",
        data: null,
      };
    }
    myCache.set(`bettransactionLocks:${userid}`, "locked", 10);
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
    const response = await Baxi.fundBetting({
      provider,
      amount,
      accountNumber:account,
    });
    console.log(response);
    await createTransaction({
      userid,
      amount,
      email,
      recipient: account,
      provider,
      name:`${provider} Betting Topup`,
      status: response.status,
      service: "betting",
    });
    if (response.status === "success") {
      // Points(userid, amount, email);
      return new ApiResponse({
        message: `Your ${provider} Betting Topup of ${amount} Naira was successful`,
      });
    } else {
      await addUserBalance({ amount: deductedAmount, userid });
      console.error("External API error:", response.status);
      return new ApiError({ message: `Betting Topup ${response.status}` });
    }
  } catch (error) {
    await addUserBalance({ amount: deductedAmount, userid });
    console.error(error.response?.data);
    return new ApiError({
      message: "Betting Topup failed due to internal server error",
    });
  } finally {
    myCache.del(`bettransactionLocks:${userid}`);
  }
};

export const VerifyBetting = async ({
  provider,
  number,
}: {
  provider: string;
  number: string;
}) => {
  try {
    const response = await Baxi.verifyBettingName({ provider, accountNumber:number });
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
