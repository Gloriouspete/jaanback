import { NextFunction, Request, RequestHandler, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateCablePurchase: RequestHandler[] = [
  body("provider").notEmpty().withMessage("Phone Number is required"),
   body("cardnumber").notEmpty().withMessage("Decoder Number is required"),
    body("month").notEmpty().withMessage("Please select a valid Month"),
  body("code").notEmpty().withMessage("Invalid Request, Please try again later"),
  body("plan")
    .isMobilePhone("en-NG")
    .withMessage("Please enter a valid Plan"),
  (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
      });
      return
    }
    next();
  },
];

export const validateCableFetch:RequestHandler[] = [
    body("provider").notEmpty().withMessage("Service Provider is required"),
    (req: any, res: any, next: any):void => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({
                success: false,
                message: errors.array()[0].msg
            })
            return
        }
        next()
    }
]