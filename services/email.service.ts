import EmailModel from "../models/email.model.ts";
import { getUserByEmail } from "../repository/index.ts";
import ApiError from "../utils/ApiError.ts";
import ApiResponse from "../utils/ApiResponse.ts";
import { generateSixDigits } from "../utils/helpers.ts";
import Jwt from "../utils/token.ts";

export class EmailModelHandler {
  async checkCode(givencode: number, email: string) {
    try {
      const emailModel = await EmailModel.findOne({
        where: {
          email: email,
        },
        raw: true,
      });
      if (!emailModel) {
        return new ApiError({ message: "Invalid Code" });
      };
      const { code, expires } = emailModel;
      if (code !== givencode) {
        return new ApiError({ message: "Invalid Code" });
      };
      const expiredTime = new Date(expires).getTime();
      const now = new Date().getTime();
      if (now > expiredTime) {
        return new ApiError({ message: "Code Expired, Resend A new One" });
      };
      const userDetails = await getUserByEmail(email);
      if(!userDetails){
        return new ApiError({ message: "Internal Server Error" });
      };
      const token = Jwt.generateToken(userDetails?.userid);
      return new ApiResponse({ data: token });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  async ResendCode(email: string) {
    try {
      const sixDigits = generateSixDigits();
      console.log("see sixdigits", sixDigits);
      const now = new Date();
      const expires = new Date(now.getTime() + 15 * 60000).toString();
      await EmailModel.upsert({
        email,
        code: sixDigits,
        expires,
      });
      return sixDigits;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
  async createCode(email: string) {
    try {
      const sixDigits = generateSixDigits();
      console.log("see sixdigits", sixDigits);
      const now = new Date();
      const expires = new Date(now.getTime() + 15 * 60000).toString();
      await EmailModel.upsert({
        email,
        code: sixDigits,
        expires,
      });
      return sixDigits;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}

const emailHandler = new EmailModelHandler();
export default emailHandler;