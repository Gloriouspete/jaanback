import { Secrets } from "../constants/index.ts";
import jwt from "jsonwebtoken";

class JwtHandler {
  secretkey: string;
  payload: any;
  
  constructor(secretkey: any) {
    this.secretkey = secretkey;
  };
  
  generateToken(payload: any) {
    const tokenPayload = { userid: payload };
    const token = jwt.sign(tokenPayload, this.secretkey);
    return token;
  };
  
  generateTempToken(payload: any) {
    const tokenPayload = { userid: payload };
    const token = jwt.sign(tokenPayload, this.secretkey, {
      expiresIn: "15m",
    });
    return token;
  };
  
  verifyToken(token: string) {
    try {
      const cleanToken = token.startsWith('Bearer ') ? token.slice(7) : token;
      
      const decoded = jwt.verify(cleanToken, this.secretkey);
      
      if (typeof decoded === "string") {
        console.log("Token decoded as string:", decoded);
        throw new Error("Invalid jwt - decoded as string");
      }
      
      return decoded?.userid;
    } catch (err) {
      console.error("Token verification error:", err);
      throw err;
    }
  };
}

const Jwt = new JwtHandler(Secrets.SecretEnv);

export default Jwt;
