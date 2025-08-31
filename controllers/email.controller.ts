import { NextFunction, Request, RequestHandler, Response } from "express";
import { CustomReq } from "../utils/interface.ts";
import ApiError from "../utils/ApiError.ts";
import emailHandler from "../services/email.service.ts";
import ApiResponse from "../utils/ApiResponse.ts";
import Jwt from "../utils/token.ts";
// export const checkEmailoCode = async (req: Request, res: Response): Promise<void> => {
//     const userid = (req as CustomReq).user
//     try {
//         const { code } = req.body;
//         const response = await emailHandler.checkCode(code, userid)
//         console.log(response)
//         if (response?.success) {
//             res.status(200).json(response)
//             return
//         }
//         res.status(500).json(response)
//     } catch (error) {
//         res.status(500).json(new ApiError())
//     }
// }
export const ResendEmailCode = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userid = (req as CustomReq).user;
  try {
    const response = await emailHandler.ResendCode(userid);
    console.log(response);
    if (response) {
      res
        .status(200)
        .json(
          new ApiResponse({
            message: "Another Code has been generated and sent to your email",
          }),
        );
      return;
    }
    res
      .status(500)
      .json(
        new ApiError({
          message: "Unable to generate New code, Try Again Later",
        }),
      );
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiError({
          message: "Unable to generate New code, Try Again Later",
        }),
      );
  }
};

export const checkSignupCode = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userid = (req as CustomReq).user;
  try {
    const { code, email } = req.body;
    console.log("see code and userid", code + "" + userid);
    const response = await emailHandler.checkCode(code, email);
    console.log(response);
    if (response?.success) {
      const token = Jwt.generateToken(response.data.userid);
      res.status(200).json(new ApiResponse({ data: token }));
      return;
    }
    res.status(500).json(response);
  } catch (error) {
    res.status(500).json(new ApiError());
  }
};

export const checkLoginCode = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userid = (req as CustomReq).user;
  try {
    const { code, email } = req.body;
    console.log("see code and userid", code + "" + userid);
    const response = await emailHandler.checkCode(code, email);
    console.log(response);
    if (response?.success) {
      const token = Jwt.generateToken(response.data.userid);
      res.status(200).json(new ApiResponse({ data: token }));
      return;
    }
    res.status(500).json(response);
  } catch (error) {
    res.status(500).json(new ApiError());
  }
};

export const ResendLoginCode: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userid = (req as CustomReq).user;
  try {
    const response = await emailHandler.ResendCode(userid);
    console.log(response);
    if (response) {
      res
        .status(200)
        .json(
          new ApiResponse({
            message: "Another Code has been generated and sent to your email",
          }),
        );
      return;
    }
    res
      .status(500)
      .json(
        new ApiError({
          message: "Unable to generate New code, Try Again Later",
        }),
      );
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiError({
          message: "Unable to generate New code, Try Again Later",
        }),
      );
    return;
  }
};
