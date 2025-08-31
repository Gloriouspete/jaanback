import { Request, Response } from "express"
import * as Service from "../../services";
import { CustomReq } from "../../utils/interface";
import ApiError from "../../utils/ApiError";

export const purchaseAirtime = async (req: Request, res: Response): Promise<void> => {
    try {
        const userid = (req as CustomReq).user
        const { amount, phone, provider } = req.body;
        const response = await Service.PurchaseAirtime({ userid, amount, provider, phone })
        res.status(response.code).json(response)
    } catch (error: any) {
       res.status(500).json(new ApiError())
    }
}