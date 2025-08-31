import { Request, Response } from "express";
import * as Service from "../../services";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const purchaseGiftcard = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userid = (req as CustomReq).user;
    const { productCode,
      name,
    productId,
    walletId,
    providerId,
    value,
    country,
    countrycode,
    phone } = req.body;
    console.log(req.body)
    const response = await Service.PurchaseGiftcard({
      userid,
      name,
      productCode,
      productId,
      walletId,
      providerId,
      country,
      countrycode,
      phone,
      value
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};


export const fetchGiftcardProviders = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await Service.FetchGiftcardProviders();
    console.log(response.data)
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};
