import Admin from "../../models/admin.model";
import emailHandler from "../../services/email.service";
import ApiError from "../../utils/ApiError";
import Hasher from "../../utils/hash";
import Jwt from "../../utils/token";

export const AdminLogin = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
        const admin = await Admin.findOne({
          where: {
            email,
          },
          raw: true,
        });
    
        if (!admin) {
          console.log("no user");
          res.status(404).json({
            success: false,
            message: "Login Failed, Email does not exist",
            code: 404,
          });
          return
        }
        const {
          password: hashedpassword,
          name,
          username,
          userid,
          email: useremail,
        } = admin;
    
        const result = await Hasher.verifyHash(password, hashedpassword);
        if (!result) {
          res.status(401).json({
            success: false,
            message: "Invalid email or password. Please try again.",
            code: 401,
          });
          return
        }
        if (result === hashedpassword) {
          const token = Jwt.generateTempToken(userid);
          await emailHandler.createCode(useremail);
          if (token) {
            console.log(token);
            res.status(201).json({
              success: true,
              message: "Successfully Logged in",
              code: 200,
              data: token,
            });
            return
          }
        } else {
          res.status(401).json({
            success: false,
            message: "Invalid email or password. Please try again.",
            code: 401,
          });
          return
        }
  } catch (error) {
    return res.status(500).json(new ApiError({ message: "Unable to Login, Try Again Later" }));
  }
};