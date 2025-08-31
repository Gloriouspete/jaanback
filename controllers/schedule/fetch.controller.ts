import { Request, Response } from "express"
import * as Service from "../../services/schedule";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const scheduleFetch = async (req: Request, res: Response): Promise<void> => {
  console.error("got to schedule fetch")
  try {
    const userid = (req as CustomReq).user;
    const { service } = req.body;
    const response = await Service.ScheduleFetch({ userid, service })
    console.log(response)
    res.status(response.code).json(response)
  } catch (error: any) {
    console.error(error)
    res.status(500).json(new ApiError())
  }
};

export const scheduleEdit = async (req: Request, res: Response): Promise<void> => {
  try {
    const userid = (req as CustomReq).user
    const { scheduleid, action } = req.body;
    const response = await Service.ScheduleEdit({ userid, id: scheduleid, action })
    res.status(response.code).json(response)
  } catch (error: any) {
    res.status(500).json(new ApiError())
  }
};