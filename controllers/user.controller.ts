import Notifications from "../models/notification.model";
import Transactions from "../models/transaction.model";
import { getUserById } from "../repository";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import { CustomReq } from "../utils/interface";

export const getUserDetail = async (req: any, res: any) => {
  try {
    const userid = (req as CustomReq).user;
    const userDetails = await getUserById(userid);
    if (userDetails && userDetails.email) {
      return res.status(200).json(new ApiResponse({ data: userDetails }));
    } else {
      return res.status(404).json(
        new ApiError({
          message: "Failed To Fetch User, Try Logging in again",
        }),
      );
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(new ApiError({ data: JSON.stringify(error) }));
  }
};

export const getUserTransactions = async (req: any, res: any) => {
  try {
    const userid = (req as CustomReq).user;
    const UserTransactions = await Transactions.findAll({
      where: {
        userid: userid,
      },
      raw: true,
    });

    if (UserTransactions && UserTransactions.length > 0) {
      return res.status(200).json(new ApiResponse({ data: UserTransactions }));
    } else {
      return res
        .status(404)
        .json(new ApiError({ message: "Failed To Fetch User Transactions" }));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(new ApiError({ data: JSON.stringify(error) }));
  }
};

export const getTransactionReference = async (req: any, res: any) => {
  try {
    const { reference } = req.body;
    const userid = (req as CustomReq).user;
    const UserTransactions = await Transactions.findOne({
      where: {
        userid: userid,
        reference: reference,
      },
      raw: true,
    });

    if (UserTransactions) {
      await Notifications.update({status: 'read'}, {where: {reference: UserTransactions.reference}})
      return res.status(200).json(new ApiResponse({ data: UserTransactions }));
    } else {
      return res
        .status(404)
        .json(new ApiError({ message: "Failed To Fetch User Transactions" }));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(new ApiError({ data: JSON.stringify(error) }));
  }
};

export const getUserNotifications = async (req: any, res: any) => {
  try {
    const userid = (req as CustomReq).user;
    const UserNotifications = await Notifications.findAll({
      where: {
        userid: userid,
      },
      raw: true,
    });
    if (UserNotifications && UserNotifications.length > 0) {
      return res.status(200).json(new ApiResponse({ data: UserNotifications }));
    } else {
      return res
        .status(404)
        .json(new ApiError({ message: "Failed To Fetch User Notifications" }));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(new ApiError({ data: JSON.stringify(error) }));
  }
};

export const updateUserNotification = async (req: any, res: any) => {
  try {
    console.log("got to update")
    const userid = (req as CustomReq).user;
    const { reference, type } = req.body;
    if (reference && !type) {
      await Notifications.update(
        { status: "read" },
        {
          where: {
            userid: userid,
            reference,
          },
        },
      );
    } else if (!reference && type) {
      await Notifications.update(
        { status: "read" },
        {
          where: {
            userid: userid,
          },
        },
      );
    }
    return res.status(200).json(new ApiResponse({ message:"Notifications Updated successfully" }));
  } catch (error) {
    console.error(error);
    res.status(500).json(new ApiError({ data: JSON.stringify(error) }));
  }
};
