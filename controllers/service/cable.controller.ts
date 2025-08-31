import { Request, Response } from "express";
import * as Service from "../../services";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const purchaseCable = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userid = (req as CustomReq).user;
    const { code, month,cardnumber, provider, plan } = req.body;
    const response = await Service.PurchaseCable({
      userid,
      code,
      provider,
      month,
      cardnumber,
      plan
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};
export const fetchCable = async (req: Request, res: Response): Promise<void> => {
  try {
    const { provider } = req.body;
    const response = await Service.FetchCable({ provider });
    console.log(response.data[0])
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};
