import Baxi from "../../modules/baxi.module";
import { addUserBalance, deductUserBalance, getUserById } from "../../repository";
import { createNotification } from "../../repository/notification.repository";
import { createTransaction } from "../../repository/transaction.repository";
import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import NodeCache from "node-cache";
const myCache = new NodeCache();

export const PurchaseAirtime = async ({ userid, provider, phone, amount }: { userid: string, provider: string, phone: string, amount: number }) => {
  console.error("got to purchase airtime")
    let deductedAmount = 0;
    try {
        const lockExists = myCache.get(`airtransactionLocks:${userid}`);
        if (lockExists) {
            console.log("Existing Transaction in progress");
            return {
                code: 429,
                success: false,
                message: "Another Airtime purchase is currently in progress. Please wait a moment and try again.",
                data: null,
            };
        }
        myCache.set(`airtransactionLocks:${userid}`, "locked", 10);
        const userData = await getUserById(userid)
        if (!userData) {
            return new ApiError({
                code: 400,
                message: "User account not found. Please contact support if this issue persists.",
            });
        }
        const { credit, email, verified, ban } = userData;
        if (ban === "yes") {
            return new ApiError({ code: 403, message: "You have been banned from using Jaan services." })
        }
        if (amount > 9999) {
            console.error("This user just exceeded 10k transaction");
            return new ApiError({ code: 403, message: "You're not cleared for transactions over 10,000 Naira" })
        }
        // if (verified === "no") {
        //     return new ApiError({ code: 401, message: "Your Kyc Account has not been verified. Please go to profile to verify your Identity before proceeding with this transaction." })
        // }
        const balance = Number(credit);

        if (isNaN(balance) || !balance && balance !== 0) {
            return new ApiError({  message: "Unable to retrieve account balance. Please try again in a few moments.",})
        }
        if (amount > balance) {
          return new ApiError({ code: 403, message: "Oops! Your wallet balance is too low for this purchase." });
        }
        await deductUserBalance({ amount, userid });
        deductedAmount = amount;
        const response = await Baxi.purchaseAirtime({ provider: provider, amount, phone })
        console.log(response)
        await createTransaction({
            userid,
            amount,
            email,
            recipient: phone,
            reference:response.data.baxiReference,
            provider,
            status: response.status,
            service: "airtime",
            name: `${provider} Airtime Topup`
        })
        await createNotification({
          userid,
          title:`₦${amount} Airtime Top-Up Completed Successfully`,
          message:`You've successfully topped up ₦${amount} to ${phone},Thank you for using our service!`,
          reference: response.data.baxiReference,
          status:"unread",
          service:"airtime",
          type:"transaction"
        })
        if (response.status === "success" || response.status === "pending") {
            // Points(userid, amount, email);
            return new ApiResponse({ message: `Your Airtime Purchase of ${amount} Naira to ${phone} was ${response.status === "success"?"successful":"pending"}` })
        } else {
            await addUserBalance({ amount: deductedAmount, userid })
            console.error("External API error:", response.status);
            return new ApiError({ message: `Airtime Purchase ${response.status}` })
        }
    } catch (error) {
        await addUserBalance({ amount: deductedAmount, userid })
        console.error(error);
        return new ApiError({ message: "Your airtime top-up wasn't completed. Please try again later." })
    } finally {
        myCache.del(`airtransactionLocks:${userid}`);
    }
};
