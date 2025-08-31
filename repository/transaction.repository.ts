import Transactions from "../models/transaction.model";
interface Prop {
    userid: string,
    amount: number;
    email?: string;
    country?: string;
    name: string;
    plan?: string;
    phone?: string;
    reference: string;
    recipient?: string;
    provider?: string;
    pin?: string;
    status: string;
    service: string;
    remark?: string;
}
export async function createTransaction({ userid, amount, email, country, name, plan, phone, reference, recipient, provider, pin, status, service, remark }: Prop) {
    const newdate = new Date();
    const create_date = newdate.toISOString();
    try {
        await Transactions.create({
            userid,
            amount,
            email: email || null,
            country: country || null,
            name,
            plan,
            phone,
            reference,
            recipient,
            provider,
            pin,
            status,
            service,
            remark,
            date: create_date
        })
    } catch (error) {
        console.error(error)
        return true
    }
}