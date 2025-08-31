import crypto from "node:crypto";
import {Secrets} from "../constants/secrets"
class PaystackModule {
  secret: string;
  headers: Record<string, string>;

  constructor(secret: string) {
    this.secret = secret;
    this.headers = {
      Authorization: `Bearer ${this.secret}`,
      "Content-Type": "application/json",
    };
  }

  private async fetchPaystack(url: string, options: RequestInit) {
    const res = await fetch(url, options);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Paystack error");
    return data;
  }

  async initialize(email: string, amount: number, metadata: object = {}) {
    return await this.fetchPaystack(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({ email, amount, metadata, channel: ["card"] }),
      },
    );
  }

  async verify(reference: string) {
    return await this.fetchPaystack(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: this.headers,
      },
    );
  }

  async chargeAuthorization(
    email: string,
    amount: number,
    authorization_code: string,
  ) {
    return await this.fetchPaystack(
      "https://api.paystack.co/transaction/charge_authorization",
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({ email, amount, authorization_code }),
      },
    );
  }

  async listTransactions() {
    return await this.fetchPaystack("https://api.paystack.co/transaction", {
      method: "GET",
      headers: this.headers,
    });
  }
  verifyWebhookSignature(rawBody: string, signature: string) {
    const hash = crypto
      .createHmac("sha512", this.secret)
      .update(rawBody)
      .digest("hex");
    return hash === signature;
  }
}

const Paystack = new PaystackModule(String(Secrets.PAYSTACKSECRET))

export default Paystack;