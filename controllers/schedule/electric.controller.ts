import { Request, Response } from "express"
import * as Service from "../../services/schedule";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const scheduleElectric = async (req: Request, res: Response): Promise<void> => {
    try {
        const userid = (req as CustomReq).user
        const { amount, phone, provider,frequency,date,payment } = req.body;
        const response = await Service.ScheduleAirtime({ userid, amount, provider, phone,frequency,date,payment })
        res.status(response.code).json(response)
    } catch (error: any) {
       res.status(500).json(new ApiError())
    }
}