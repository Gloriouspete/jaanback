import { Request, Response } from "express";
import * as Service from "../../services";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const purchaseJamb = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userid = (req as CustomReq).user;
    const { productCode, phone, account } = req.body;
    const response = await Service.PurchaseJamb({
      userid,
      productCode,
      account,
      phone,
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};

export const fetchJamb = async (req: Request, res: Response): Promise<void> => {
  try {

    const response = await Service.FetchJamb();
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};

export const verifyJambName = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { productcode, account } = req.body;
    console.log(req.body)
    const response = await Service.VerifyJamb({
      account,
      productCode: productcode,
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};
