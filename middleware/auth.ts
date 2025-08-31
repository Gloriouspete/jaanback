import { NextFunction, Request, Response } from "express";
import Jwt from "../utils/token.ts";
import ApiError from "../utils/ApiError.ts";
import { CustomReq } from "../utils/interface.ts";

const excludedRoutes = [
  "/api/v1/user/login",
  "/login",
  "/api/v1/getdata",
  "/auth/checkcode",
  "/api/v1/signup/email",
  "/signup/email",
  "/auth/forgot",
  "/api/v1/verifyacc",
  "/",
  "/webhooksuccess",
  "/email",
  "/admin/login/",
  "/admin/createuser",
  "/paywebhook",
];

function authenticateJWT(req: Request, res: Response, next: NextFunction):void {
  console.log(req.url);
  if (excludedRoutes.includes(req.url)) {
    next();
    return
  }
  const token = req.headers["authorization"];
  if (!token) {
    console.log("missing token");
    res.status(401).json({ message: "Bearer token is missing" });
    return
  }
  try {
    console.log(token)
    const decodedToken = Jwt.verifyToken(token) as string;
    if (!decodedToken || decodedToken === undefined) {
       res
        .status(401)
        .json(new ApiError({ message: "Unauthorized Request" }));
       return
    }
    (req as CustomReq).user = decodedToken;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(403)
      .json(new ApiError({ message: "Unauthorized Request" }));
    return
  }
}
export default authenticateJWT;
