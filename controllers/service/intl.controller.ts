import { Request, Response } from "express";
import * as Service from "../../services";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const purchaseElectsric = async (
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

export const fetchIntlCountries = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await Service.FetchInternationalCountries();
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};

export const fetchIntlOperators = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { countrycode } = req.body;
    const response = await Service.FetchInternationalOperator({countryCode:countrycode});
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};

export const fetchIntlProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { countrycode,operatorid } = req.body;
    const response = await Service.FetchInternationalProducts({countryCode:countrycode,operatorId:Number(operatorid)});
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};

export const verifyIntlName = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { country, accountnumber } = req.body;
    const response = await Service.VerifyIntl({
      countryCode:country,
      number: accountnumber,
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};