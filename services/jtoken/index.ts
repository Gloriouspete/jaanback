import JtokenEmail from "./email";
import User from "../../models/user.model"
import ApiError from "../../utils/ApiError";
import { createTransaction } from "../../repository/transaction.repository";
import ApiResponse from "../../utils/ApiResponse";
import { createNotification } from "../../repository/notification.repository";
import generateTransactionRef from "../../utils/generateRef";
export const Jtoken = async ({ userid, amount, email }:{userid:string,amount:number,email:string}) => {
  let jtoken = 0;
  if (!userid || !amount) {
    return false;
  }
  if (Number(amount) >= 200 && Number(amount) < 1000) {
    jtoken = 2;
  } else if (Number(amount) >= 1000) {
    jtoken = 4;
  }
  try {
    await User.increment( 'jtoken' , { by:jtoken, where: {
      userid
    }})
    JtokenEmail.purchase({ email, code:jtoken })
    return true
  } catch (error) {
    return false
  } finally {
  }
};

export const ConvertJtoken = async ({ userid, amount }:{userid:string,amount:number}) => {
  const transactionRef = generateTransactionRef();
  try {
    const user = await User.findOne({
      where:{
        userid
      },
      raw:true
    })
    if (!user) {
      return new ApiError();
    }
    const { jtoken, email } = user;
    if(!jtoken || Number(jtoken) < Number(amount)){
      return new ApiError({message:"Insufficient JToken Balance"})
    }
    const creditAmount = Number(amount) * 10
    await User.decrement('jtoken', {
      by:Number(amount),
      where:{
        userid
      }
    })
    await User.increment('credit', {
      by:creditAmount,
      where:{
        userid
      }
    })
    await createTransaction({
      userid,
      name:"JAAN Wallet Top Up",
      amount:creditAmount,
      email,
      service:"funding",
      provider:"Jtoken",
      status:"success",
      reference:transactionRef
    })
    await createNotification({
      userid,
      title:`Wallet Credited Successfully`,
      message:`Your wallet has been credited with ₦${creditAmount}`,
      reference: transactionRef,
      status:"unread",
      service:"funding",
      type:"transaction"
    })
    return new ApiResponse({message:`You have successfully converted ${amount} Jtokens to ${creditAmount} Naira `})
  } catch (error) {
    return new ApiError()
  } finally {
  }
};


