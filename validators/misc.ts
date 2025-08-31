import { body, validationResult } from "express-validator";


export const validateReference = [
  body("reference").notEmpty().withMessage("Invalid Request, Reference ID is required"),
  (req: any, res: any, next: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0],
      });
    }
    next();
  },
];