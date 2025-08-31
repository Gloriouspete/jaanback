import { Secrets } from "../constants/secrets";
import * as nodemailer from "nodemailer";
const Transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  secureConnection: false,
  connectionTimeout: 100000,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: "mcgrin1@gmail.com",
    pass: Secrets.BREVO,
  },
});

export default Transporter;
