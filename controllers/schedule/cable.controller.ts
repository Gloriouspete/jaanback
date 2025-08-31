import { Request, Response } from "express";
import * as Service from "../../services/schedule";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const scheduleCable = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userid = (req as CustomReq).user;
    const {
      amount,
      provider,
      frequency,
      date,
      payment,
      code,
      plan,
      month,
      recipient,
    } = req.body;
    const response = await Service.ScheduleCable({
      userid,
      amount,
      provider,
      recipient,
      month: Number(month),
      code,
      plan,
      frequency,
      date,
      payment,
    });
    res.status(response.code).json(response);
  } catch (error: any) {
    res.status(500).json(new ApiError());
  }
};
