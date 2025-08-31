import { body, validationResult } from "express-validator";
export const validateNewUser = [
  body("name").notEmpty().withMessage("Name is Required"),
  body("email")
    .notEmpty()
    .withMessage("Please provide an email")
    .isEmail()
    .withMessage("Valid Email is Required"),
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

export const validateLogin = [
  body("password")
    .notEmpty()
    .withMessage("Password is Required")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password length should only be between 8 to 20 digits"),
  body("email")
    .notEmpty()
    .withMessage("Please provide an email")
    .isEmail()
    .withMessage("Valid Email is Required"),
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
export const validatePassword = [
  body("password")
    .notEmpty()
    .withMessage("Password is Required")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password length should only be between 8 to 20 digits"),
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

export const validateEmail = [
  body("email").notEmpty().withMessage("Email cannot be empty").isEmail().withMessage("Valid Email is Required"),
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

export const validatePin = [
  body("pin")
    .notEmpty()
    .withMessage("Valid Email is Required")
    .isLength({ min: 4, max: 4 })
    .withMessage("Pin Must be exactly 4 digits")
    .isNumeric()
    .withMessage("Pin should only Contain Numbers"),
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

export const validatePinAndPass = [
  body("pin")
    .notEmpty()
    .withMessage("Valid Email is Required")
    .isLength({ min: 4, max: 4 })
    .withMessage("Pin Must be exactly 4 digits")
    .isNumeric()
    .withMessage("Pin should only Contain Numbers"),
  body("password")
    .notEmpty()
    .withMessage("Password is Required")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password length should only be between 8 to 20 digits"),
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

export const validateEmailCode = [
  body("email").notEmpty().isEmail().withMessage("Valid Email is Required"),
  body("code")
    .isLength({ min: 6, max: 6 })
    .withMessage("Valid Code Length is Required: 6"),
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
