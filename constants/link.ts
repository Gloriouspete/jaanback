import axios from "axios"
import { Secrets } from "./secrets";
import crypto from "node:crypto"
export const Links = {
    baxiUrl: "https://api.staging.baxibap.com"
}

export const MonnifyUrl = axios.create({
  baseURL:"https://api.monnify.com"
})

const nonce = generateNonce(String(Secrets.VENDNONCE));
const dataToSign = Secrets.VENDAPI + nonce;
const sign = crypto.createSign("SHA256");
sign.update(dataToSign);
sign.end();
const signature = sign.sign(String(Secrets.VENDPRIVATE), "base64");


export const VendUrl = axios.create({
  baseURL: "https://sandboxapi.vendifydigital.com/api/v1",
  headers: {
    "X-Api-Key": Secrets.VENDAPI,
    "X-Nonce": nonce,
    "X-Signature": signature,
    "X-Currency-Code": "NGN",
    "X-Currency-Id": 160,
  },
});


function generateNonce(noncePrefix: string) {
  const date = new Date();
  const dateInyyMMdd = date.toISOString().slice(2, 10).replace(/-/g, "");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const timeInHHmm = hours + minutes;
  const randomNumbers = String(
    Math.floor(Math.random() * Math.pow(10, 10)),
  ).padStart(10, "0");
  const nonce = `${noncePrefix}${dateInyyMMdd}${timeInHHmm}${randomNumbers}`;
  return nonce;
}
