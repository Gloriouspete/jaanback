import dotenv from "dotenv";
dotenv.config();
const Secret = process.env.SECRET;
const baxiusername = process.env.BAXI_USER;
const baxisecret = process.env.BAXI_SECRET;
const baxiapi = process.env.BAXI_API;
const brevo = process.env.BREVO;
const monnifyclient = process.env.MONNIFY_CLIENT;
const monnifysecret = process.env.MONNIFY_SECRET;
const paystacksecret = process.env.PAYSTACK_SECRET;
const vendapiKey = process.env.VEND_KEY;
const vendprivateKey = process.env.PRIVATE_KEY;
const vendnonceSecret = process.env.NONCE;
export const Secrets = {
  SecretEnv: Secret,
  BAXIUSER: baxiusername,
  BAXISECRET: baxisecret,
  BAXIAPI: baxiapi,
  BREVO: brevo,
  MONNIFYCLIENT: monnifyclient,
  MONNIFYSECRET: monnifysecret,
  PAYSTACKSECRET: paystacksecret,
  VENDNONCE: vendnonceSecret,
  VENDPRIVATE: vendprivateKey,
  VENDAPI: vendapiKey,
};
