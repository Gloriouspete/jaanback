import WelcomeMail from "../emails/signup/index.ts";
import User from "../models/user.model.ts";
import {
  createUser,
  getAllUser,
  getUserByEmail,
  getUserById,
} from "../repository/index.ts";
import generateCouponId from "../utils/generateRandom.ts";
import Hasher from "../utils/hash.ts";
import { generateUserID } from "../utils/helpers.ts";
import Jwt from "../utils/token.ts";
import emailHandler from "./email.service.ts";

export const UserByEmailService = async (email: string) => {
  try {
    const generatedUserId = generateUserID();
    const generatedRef = generateCouponId();
    let user = await getUserByEmail(email);
    if (!user) {
      user = await createUser({
        email: email,
        userid: generatedUserId,
        refercode: generatedRef,
      });
    }
    const { pin } = user;
    if (pin && pin !== null) {
      return {
        success: false,
        message: "Account already exists. Please log in to continue.",
        data: null,
      };
    }
    await emailHandler.createCode(email);
    const token = Jwt.generateToken(user.userid);
    console.log("see email", user.userid + "teer" + token);
    return {
      success: true,
      message: "Successfully Registered, Please proceed.",
      data: token,
    };
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong while fetching your account. Please try again.");
  }
};
export const setKycDetails = async (
  name: string,
  username: string,
  phone: string,
  country: string,
  date: string,
  gender: string,
  userid: string,
) => {
  try {
    const response = await User.update(
      {
        name,
        username,
        phone,
        country,
        date,
        gender,
        signup: true,
      },
      { where: { userid } },
    );
    if (response) {
      WelcomeMail({email:name})
      return {
        success: true,
        message: "Successfully Set Your Details",
      };
    }
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong while updating your KYC. Please try again later.");
  }
};
export const setPin = async (pin: number, userid: string) => {
  try {
    const response = await User.update(
      {
        pin,
      },
      { where: { userid } },
    );
    if (response) {
      return {
        success: true,
        message: "Your PIN has been set successfully.",
      };
    }
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong while setting your PIN. Please try again later.");
  }
};
export const setPassword = async (password: string, userid: string) => {
  try {
    const hashedpassword = await Hasher.generateHasher(password);
    const response = await User.update(
      {
        password: hashedpassword,
      },
      { where: { userid } },
    );
    if (response) {
      return {
        success: true,
        message: "Password Set Successfully",
      };
    }
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong while setting your password. Please try again later.");
  }
};

export const LoginService = async (email: string, password: string) => {
  try {
    const user = await User.findOne({
      where: {
        email,
      },
      raw: true,
    });

    if (!user) {
      console.log("no user");
      return {
        success: false,
        message: "Login Failed, Email does not exist",
        code: 404,
      };
    }

    console.log("user", user.password + "dee" + " " + password);
    const {
      password: hashedpassword,
      name,
      username,
      userid,
      email: useremail,
    } = user;

    if (!hashedpassword || !username || !name) {
      console.log("sign up incomplete");
      return {
        success: false,
        message: "Sign up Incomplete, Please complete Sign up Process",
        code: 401,
      };
    }

    const result = await Hasher.verifyHash(password, hashedpassword);
    if (!result) {
      return {
        success: false,
        message: "Invalid email or password. Please try again.",
        code: 401,
      };
    }
    if (result === hashedpassword) {
      const token = Jwt.generateTempToken(userid);
      await emailHandler.createCode(useremail);
      if (token) {
        console.log(token);
        return {
          success: true,
          message: "Successfully Logged in",
          code: 200,
          data: token,
        };
      }
    } else {
      return {
        success: false,
        message: "Invalid email or password. Please try again.",
        code: 401,
      };
    }
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong while logging you in. Please try again later.");
  }
};
export const UpdatePin = async (
  password: string,
  pin: number,
  userid: string,
) => {
  try {
    const user = await getUserById(userid);
    if (user) {
      const { password: hashedpassword } = user;
      const correct = await Hasher.verifyHash(password, hashedpassword);
      if (!correct) {
        return {
          success: false,
          message: "Incorrect Password",
          code: 401,
        };
      }
      if (correct === hashedpassword) {
        await User.update(
          { pin },
          {
            where: {
              userid,
            },
          },
        );
        return {
          success: true,
          message: "Transaction Pin Successfully Changed ",
          code: 200,
          data: null,
        };
      } else {
        return {
          success: false,
          message: "Incorrect Password",
          code: 401,
        };
      }
    } else {
      return {
        success: false,
        message: "Action Failed, Try again later",
        code: 500,
      };
    }
  } catch (e) {
    console.error(e);
    throw new Error("Internal server error, Unable to set Pin");
  }
};

export const ResetPasswordByEmail = async (email: string) => {
  try {
    let user = await getUserByEmail(email);
    if (!user) {
      return {
        success: true,
        message:
          "If User Exists, An email address has been sent to the email address",
        data: null,
      };
    }
    const { pin } = user;
    if (!pin || pin === null) {
      return {
        success: false,
        message:
          "If User Exists, An email address has been sent to the email address",
        data: null,
      };
    }
    await emailHandler.createCode(email);
    return {
      success: true,
      message:
        "If User Exists, An email address has been sent to the email address",
      data: null,
    };
  } catch (e) {
    console.error(e);
    throw new Error("Failed to Fetch User By Email");
  }
};
