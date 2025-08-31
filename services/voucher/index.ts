import {
  addUserBalance,
  deductUserBalance,
  getUserById,
} from "../../repository";
import { createTransaction } from "../../repository/transaction.repository";
import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import NodeCache from "node-cache";
import generateCouponId from "../../utils/generateRandom";
import Voucher from "../../models/voucher.model";
import { Jtoken } from "../jtoken";
import VoucherUser from "../../models/voucheruser.model";
import { createNotification } from "../../repository/notification.repository";
const myCache = new NodeCache();
import generateTransactionRef from "../../utils/generateRef";
export const BuyVoucher = async ({
  userid,
  amount,
  email,
}: {
  userid: string;
  amount: number;
  email: string;
}) => {
  const transactionRef = generateTransactionRef();
  let deductedAmount = 0;
  try {
    const lockExists = myCache.get(`vouchertransactionLocks:${userid}`);
    if (lockExists) {
      console.log("Existing Transaction in progress");
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
    const { credit, email, verified, ban } = userData;
    if (ban === "yes") {
      return new ApiError({
        code: 403,
        message: "You have been banned from using Jaan services.",
      });
    }
    const generatedVoucher = generateCouponId()

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
    
    if (amount > 1000) {
      console.error("The highest voucher value that could be generated at a time is 1000 Naira");
      return new ApiError({
        code: 403,
        message: "You're not cleared for transactions over 1000 Naira",
      });
    }
    if (amount > balance) {
      return new ApiError({ code: 403, message: "Insufficient Balance" });
    }
    
    await deductUserBalance({ amount, userid });
    deductedAmount = amount;
    const response = await Voucher.create({
      userid,
      voucherid:generatedVoucher,
      admin:false,
      amount,
    })
    console.log(response)
    if (response) {
      await createTransaction({
        userid,
        amount,
        email,
        recipient: generatedVoucher,
        reference:transactionRef,
        name:"Voucher Purchase",
        provider:"Voucher",
        status: "success",
        service: "voucher",
        pin:generatedVoucher
      });
      await createNotification({
        userid,
        title:`₦${amount} Voucher Purchased Successfully`,
        message:`You've successfully purchased a ₦${amount} voucher with ID ${generatedVoucher}`,
        reference: transactionRef,
        status:"unread",
        service:"voucher",
        type:"transaction"
      })
      Jtoken({ userid, amount:Number(amount), email });
      return new ApiResponse({
        message: `You've Successfully Purchased ${amount} Naira Jaan Voucher`,
      });
    } else {
      await addUserBalance({ amount: deductedAmount, userid });
      return new ApiError({ message: `Jaan Voucher Purchase Failed` });
    }
  } catch (error) {
    await addUserBalance({ amount: deductedAmount, userid });
    console.error(error.response?.data);
    return new ApiError({
      message: "Jaan Voucher Purchas failed due to internal server error",
    });
  } finally {
    myCache.del(`vouchertransactionLocks:${userid}`);
  }
};

export const RedeemVoucher = async ({
  userid,
  voucherid,
}: {
  userid: string;
  voucherid: string;
}) => {
  let deductedAmount = 0;
  try {
    const lockExists = myCache.get(`redeemtransactionLocks:${userid}`);
    if (lockExists) {
      console.log("Existing Transaction in progress");
      return {
        code: 429,
        success: false,
        message: "Too Many Requests, Try again later",
        data: null,
      };
    }
    myCache.set(`redeemtransactionLocks:${userid}`, "locked", 10);
    const userData = await getUserById(userid);
    if (!userData) {
      return new ApiError({
        code: 400,
        message: "Something went wrong,Account not found",
      });
    }
    const { username, email, ban } = userData;
    if (ban === "yes") {
      return new ApiError({
        code: 403,
        message: "You have been banned from using Jaan services.",
      });
    }
    const couponExists = await Voucher.findOne({
      where:{
        voucherid
      },
      raw:true
    })
    const checkUsed = await VoucherUser.count({
      where:{
        voucherid
      }
    })
    const checkPersonUsed = await VoucherUser.count({
      where:{
        voucherid,
        userid
      }
    })
    if(!couponExists || !couponExists.voucherid){
      return new ApiError({message:"Invalid Voucher Code, You may get banned after multiple tries"})
    };
    if(checkPersonUsed || checkPersonUsed >= 1){
      return new ApiError({message:"This Voucher is already redeemed by you"})
    };
    const { amount, admin } = couponExists;
    if(checkUsed || checkUsed >= 1 && !admin){
      return new ApiError({message:"This Voucher is already redeemed"})
    }
    const response = await VoucherUser.create({
      userid,
      voucherid,
      username
    })
    console.log(response)
    const reference = new Date().getTime().toString()
    await createTransaction({
      userid,
      amount,
      email,
      recipient: voucherid,
      reference,
      name:"JAAN Wallet Top UP",
      provider:"Voucher",
      status: "success",
      service: "funding",
      pin:"generatedVoucher"
    });
    await createNotification({
      userid,
      title:`₦${amount} Voucher Redeemed Successfully`,
      message:`You've successfully redeemed a ₦${amount} voucher and the amount is added to your wallet balance. Enjoy`,
      reference: reference,
      status:"unread",
      service:"voucher",
      type:"transaction"
    })
    await addUserBalance({ amount:amount, userid });
    if (response) {
      return new ApiResponse({
        message: `You've Successfully Redeemed ${amount} Naira Jaan Voucher and added to your balance`,
      });
    } else {
      return new ApiError({ message: `Jaan Voucher Redeeming Failed` });
    }
  } catch (error) {
    await addUserBalance({ amount: deductedAmount, userid });
    console.error(error.response?.data);
    return new ApiError({
      message: "Jaan Voucher Redeeming failed due to internal server error",
    });
  } finally {
    myCache.del(`vouchertransactionLocks:${userid}`);
  }
};