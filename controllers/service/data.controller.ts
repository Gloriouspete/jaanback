import { Request, Response } from "express";
import * as Service from "../../services";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const purchaseData = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userid = (req as CustomReq).user;
    const { datacode, phone, provider,plan } = req.body;
    console.log(req.body)
    const response = await Service.PurchaseData({
      userid,
      datacode,
      provider,
      phone,
      plan,
    });
    console.log(response)
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};
export const fetchData = async (req: Request, res: Response): Promise<void> => {
  try {
    const { provider } = req.body;
    const response = await Service.FetchData({ provider });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};
