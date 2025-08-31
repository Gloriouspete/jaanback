import Paystack from "../../modules/paystack.module"
export const PaystackWebhook = (req: any, res: any): Promise<void> => {
  try {
    const isValid = Paystack.verifyWebhookSignature(JSON.stringify(req.body), req.headers["x-paystack-signature"])

    if (!isValid) {
     return res.status(401).send('Invalid signature');
    }

    // 2. Process event
    const event = req.body;

    if (event.event === "charge.success") {
      const { authorization } = event.data;

      // // 3. Save authorization code to database
      // await db.collection("subscriptions").insertOne({
      //   customer_email: event.data.customer.email,
      //   authorization_code: authorization.authorization_code,
      //   card_type: authorization.card_type,
      //   last4: authorization.last4,
      //   expiry: authorization.exp_month + "/" + authorization.exp_year,
      //   next_charge_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days later
      // });
    }

    return res.status(200).end()
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};
