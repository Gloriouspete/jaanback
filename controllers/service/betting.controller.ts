import { Request, Response } from "express";
import * as Service from "../../services";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const purchaseBetting = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userid = (req as CustomReq).user;
    const { amount, account, provider } = req.body;
    const response = await Service.PurchaseBetting({
      userid,
      amount,
      provider,
      account,
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};
export const verifyBettingName = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { provider, accountnumber } = req.body;
    const response = await Service.VerifyBetting({
      provider,
      number: accountnumber,
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};
