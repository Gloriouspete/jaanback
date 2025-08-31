import { Response } from "express";
import ApiError from "../../utils/ApiError";
import { CustomReq } from "../../utils/interface";
import User from "../../models/user.model";
import ApiResponse from "../../utils/ApiResponse";

export const GetAllUsers = async (req: CustomReq, res: Response) => {
  try {
    const userid = req.user;
    if (!userid) {
      res.status(401).json(new ApiError({ message: "Unauthorized Request" }));
      return;
    }
    const allUsers = await User.findAll({ raw: true });
    if (allUsers && allUsers.length > 0) {
      res.status(200).json(new ApiResponse({ message: "Returned Successfully" }));
    }
  }
  catch(error){
    res.status(500).json(new ApiError({message:""}))
  }
};
