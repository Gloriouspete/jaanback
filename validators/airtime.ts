import { body, validationResult } from "express-validator";


export const validateAirtimePurchase = [
    body("provider").notEmpty().withMessage("Network Provider is required"),
    body("phone").notEmpty().withMessage("Phone Number is required"),
    body("amount").notEmpty().isNumeric().withMessage("Valid Email is Required"),
    (req: any, res: any, next: any) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()[0].msg
            })
        }
        next()
    }
]