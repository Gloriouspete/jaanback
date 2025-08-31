import { Request, Response } from "express";
import * as Service from "../../services";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const purchaseElectric = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userid = (req as CustomReq).user;
    const { amount, phone, provider, account, serviceType } = req.body;
    console.log(req.body)
    const response = await Service.PurchaseElectric({
      userid,
      amount: Number(amount),
      provider,
      phone,
      accountnumber: account,
      serviceType,
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};

export const fetchElectric = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await Service.FetchElectric();
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};

export const verifyElectricName = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { provider, accountnumber } = req.body;
    const response = await Service.VerifyElectric({
      provider,
      number: accountnumber,
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};