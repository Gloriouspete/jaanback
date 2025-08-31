import { getAllUser } from "../repository/index.ts";
import {
  LoginService,
  ResetPasswordByEmail,
  setKycDetails,
  setPassword,
  setPin,
  UpdatePin,
  UserByEmailService,
} from "../services/index.ts";
import ApiResponse from "../utils/ApiResponse.ts";
import ApiError from "../utils/ApiError.ts";
import Jwt from "../utils/token.ts";
import { CustomReq } from "../utils/interface.ts";
import { NextFunction, Request, Response } from "express";
import emailHandler from "../services/email.service.ts";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getAllUser();
    res.status(200).json(new ApiResponse({ data: users }));
  } catch (error) {
    console.error("Error fetching users:", error);
    next(error);
  }
};
export const createUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  try {
    const response = await UserByEmailService(email);
    if (!response.success) {
      res.status(400).json(new ApiError({ message: response.message }));
      return
    }
    res.status(200).json(new ApiResponse({ data: response.data }));
    return
  } catch (error) {
    console.error("Error fetching users:", error);
    next(error);
  }
};
export const setUserKyc = async (req: CustomReq, res: Response): Promise<void> => {
  const { name, username, phone, country, date, gender } = req.body;
  const userid = req.user;
  try {
    const response = await setKycDetails(
      name,
      username,
      phone,
      country,
      date,
      gender,
      userid,
    );
    res.status(200).json(
      new ApiResponse({
        message: response?.message,
        success: response?.success,
      }),
    );
    return
  } catch (error) {
    console.error("Error Inserting users detail:", error);
     res.status(500).json(new ApiError({ message: error }));
     return
  }
};
export const setUserPin = async (req: any, res: any) => {
  const { pin } = req.body;
  const userid = req.user;
  try {
    const response = await setPin(pin, userid);
    const token = Jwt.generateToken(userid);
    res.status(200).json(
      new ApiResponse({
        message: response?.message,
        success: response?.success,
        data: token,
      }),
    );
  } catch (error) {
    return res.status(500).json(new ApiError({ message: error }));
  }
};
export const setUserPassword = async (req: any, res: any) => {
  const { password } = req.body;
  const userid = req.user;
  try {
    const response = await setPassword(password, userid);
    res.status(200).json(
      new ApiResponse({
        message: response?.message,
        success: response?.success,
      }),
    );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError({ message: JSON.stringify(error) }));
  }
};
export const UserLogin = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const response = await LoginService(email, password);
    console.log(response);
    res.status(response?.code).json(
      new ApiResponse({
        message: response?.message,
        success: response?.success,
        data: response?.success ? response.data : null,
      }),
    );
  } catch (error) {
    return res.status(500).json(new ApiError({ message: "Unable to Login" }));
  }
};
export const UpdateUserPin = async (req: any, res: any) => {
  console.log("got here")
  const { pin, password } = req.body;
  const userid = req.user;
  try {
    const response = await UpdatePin(password, pin, userid);
    console.log(response);
    res.status(response.code).json(
      new ApiResponse({
        message: response?.message,
        success: response?.success,
      }),
    );
  } catch (error) {
    return res.status(500).json(new ApiError({ message: error }));
  }
};

export const ResetPassword = async (req: any, res: any, next: any) => {
  const { email, type } = req.body;
  try {
    if (type === "email") {
      const response = await ResetPasswordByEmail(email);
      res.status(200).json(new ApiResponse({ message: response.message }));
      return;
    }
    if (type === "sms") {
      const response = await ResetPasswordByEmail(email);
      res.status(200).json(new ApiResponse({ message: response.message }));
      return;
    }
    res.status(500).json(new ApiError());
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json(new ApiError());
  }
};
export const checkEmailCode = async (req: any, res: any) => {
  const { code, email } = req.body;
  try {
    const response = await emailHandler.checkCode(code, email);
    console.log(response, "see what was returned");
    if (response?.success) {
      res.status(200).json(response);
      return;
    }
    res.status(500).json(response);
  } catch (error) {
    res.status(500).json(new ApiError());
  }
};
