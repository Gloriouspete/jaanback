import {Links } from "../constants/link";
import { Secrets } from "../constants/secrets";
import generateTransactionRef from "../utils/generateRef";

class BaxiModule {
    secret: string;
    headers: any;
    constructor(secret: string) {
        this.secret = secret;
        this.headers = {
            'Content-Type': 'application/json',
            'x-api-key': `${this.secret}`,
            "Baxi-date": new Date().toISOString(),
            'Accept': 'application/json'
        }
    }
    async getBalance() {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/superagent/account/balance`, {
                headers: this.headers
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async getAirtimeProviders() {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/airtime/providers`, {
                headers: this.headers
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async purchaseAirtime({ provider, amount, phone }: { provider: string, amount: number, phone: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/airtime/request`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    amount: Math.round(Number(amount)),
                    plan: "prepaid",
                    phone,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async getDataProviders() {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/databundle/providers`, {
                headers: this.headers
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async getDataBundles({ provider }: { provider: string }) {
      console.log(provider)
        try {
            const response = await fetch(`${Links.baxiUrl}/services/databundle/bundles`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async purchaseData({ provider, amount, phone, datacode }: { provider: string, amount: number, phone: string, datacode: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/databundle/request`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    amount: Math.round(Number(amount)),
                    phone,
                    datacode,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async verifyDataPrice({ provider, datacode }: { provider: string, datacode: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/databundle/bundles`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json()
            console.log(data)
            const bundle = data.data.find((bundle: any) => bundle.datacode === datacode);
            if (!bundle) {
               return null
            }
            return Number(bundle.price)
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    
    async getCableProviders() {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/cabletv/providers`, {
                headers: this.headers
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async getCableBundles({ provider }: { provider: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/multichoice/list`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    
    async verifyCablePrice({ provider, code,months }: { provider: string, code: string,months:string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/multichoice/list`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            const bundle = data.data.find((bundle: any) => bundle.code === code);
            if (!bundle) {
               return null
            }
            const MonthObject = bundle.availablePricingOptions.find((item:any) => String(item.monthsPaidFor) === String(months))
            if(!MonthObject){
              return null
            }
            return Number(MonthObject.price)
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async purchaseCable({ provider, amount, smartcardNumber, productCode, month }: { provider: string, amount: number, smartcardNumber: string, productCode: string, month: number }) {
        try {
            console.log(amount)
            const response = await fetch(`${Links.baxiUrl}/services/multichoice/request`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    total_amount: amount, //Math.round(Number(amount)),
                    smartcard_number: smartcardNumber,
                    product_code: productCode,
                    product_monthsPaidFor: month,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async getElectricProviders() {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/electricity/billers`, {
                headers: this.headers
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async verifyElectricName({ provider, accountNumber }: { provider: string, accountNumber: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/electricity/verify`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    account_number: accountNumber,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async purchaseElectric({ provider, amount, accountNumber, phone }: { provider: string, amount: number, accountNumber: string, phone: string }) {
        try {
            console.log(phone)
            const response = await fetch(`${Links.baxiUrl}/services/electricity/request`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    amount: Math.round(Number(amount)),
                    account_number: accountNumber,
                    phone,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async getEPinProviders() {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/epin/providers`, {
                headers: this.headers
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async verifyEpinPrice({ provider }: { provider: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/epin/bundles`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            const bundle = data.data.find((bundle: any) => bundle.amount);
            if (!bundle) {
                return {
                    success: false,
                    message: "Epin not found"
                }
            }
            return {
                success: true,
                message: "Bundle found",
                price: bundle.amount
            }
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async purchaseEPin({ provider, numberOfPins, pinValue, accountNumber, phone }: { provider: string, numberOfPins: number, pinValue: number, accountNumber: string, phone: string }) {
        try {

            const response = await fetch(`${Links.baxiUrl}/services/multichoice/request`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    pinValue,
                    amount: Math.round(Number(pinValue * numberOfPins)),
                    account_number: accountNumber,
                    phone,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async getJambBundles() {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/exampin/products`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: "jamb",
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async verifyJambPrice({ provider, productCode }: { provider: string, productCode: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/exampin/products`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            const bundle = data.data.find((bundle: any) => bundle.product_code === productCode);
            if (!bundle) {
                return null
            }
            return Number(bundle.amount)
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async verifyJambName({productCode, accountNumber }: { productCode: string, accountNumber: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/namefinder/query`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: "jamb",
                    product_code: productCode,
                    account_number: accountNumber,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async vendJamb({ amount, phone, accountNumber, productCode }: { amount: number, phone: string, accountNumber: string, productCode: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/exampin/purchase`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: "jamb",
                    amount: Math.round(Number(amount)),
                    phone,
                    account_number: accountNumber,
                    product_code: productCode,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async verifyBettingName({ provider, accountNumber }: { provider: string, accountNumber: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/namefinder/query`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    account_number: accountNumber,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async fundBetting({ provider, amount, accountNumber }: { provider: string, amount: number, accountNumber: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/betting/request`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: provider,
                    amount: Math.round(Number(amount)),
                    action: "WALLET_FUNDING",
                    account_number: accountNumber,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async internationalAirtimeCountry({page}:{page:number}) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/international-airtime/get`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: "international-airtime",
                    action_type: "GET_COUNTRIES",
                    page: page,
                    perPage: 100,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async internationalAirtimeOperator({ countryCode }: { countryCode: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/international-airtime/get`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: "international-airtime",
                    action_type: "GET_OPERATORS",
                    country_code: countryCode,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async internationalAirtimeProducts({ countryCode, operatorId }: { countryCode: string, operatorId: number }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/international-airtime/get`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: "international-airtime",
                    action_type: "GET_PRODUCTS",
                    country_code: countryCode,
                    operator_id: operatorId,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async verifyInternationalName({ countryCode, accountNumber }: { countryCode: string, accountNumber: string }) {
        try {
            const response = await fetch(`${Links.baxiUrl}/services/namefinder/query`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: "international-airtime",
                    country_code: countryCode,
                    account_number: accountNumber,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }
    async purchaseInternationalAirtime({ productId, amount, accountNumber, countryCode }: { productId: string, amount: number, accountNumber: string, countryCode: string }) {
        try {

            const response = await fetch(`${Links.baxiUrl}/services/international-airtime/request`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    service_type: "international-airtime",
                    product_id: productId,
                    amount: amount,
                    recipient_account_number: accountNumber,
                    recipient_account_type: "mobile-number",
                    country_code: countryCode,
                    agentReference: generateTransactionRef()
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }

    }

}
const Baxi = new BaxiModule(Secrets.BAXIAPI ? Secrets.BAXIAPI : "");

export default Baxi;