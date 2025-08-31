import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction, RequestHandler } from "express";

export const validateDataPurchase: RequestHandler[] = [
  body("provider").notEmpty().withMessage("Network Provider is required"),
  body("phone").notEmpty().withMessage("Phone Number is required"),
  body("phone")
    .isMobilePhone("en-NG")
    .withMessage("Please enter a valid Phone"),
  body("datacode").notEmpty().withMessage("Please Select a Data Plan"),
  body("plan").notEmpty().withMessage("Please Select a Data Plan"),
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

export const validateDataFetch:RequestHandler[] = [
  body("provider").notEmpty().withMessage("Network Provider is required"),
  (req: Request, res: Response, next: NextFunction) => {
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
