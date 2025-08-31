import { MonnifyUrl } from "../constants/link";
import { Secrets } from "../constants";
interface RequestBody {
  bvn?: string;
  nin?: string;
  accountReference?: string;
  accountName?: string;
  currencyCode?:string,
  contractCode?: string;
  customerEmail?: string;
  customerName?: string;
  getAllAvailableBanks?: boolean,
}

class MonnifyModule {
  apiKey: string;
  secret: string;
  headers: object;
  constructor(secret: string, apiKey: string) {
    this.secret = secret;
    this.apiKey = apiKey;
  }
  async login() {
    try {
      const credentials = `${this.apiKey}:${this.secret}`;
      const encodedCredentials = Buffer.from(credentials).toString("base64");
      const authHeader = `Basic ${encodedCredentials}`;
      const { data } = await MonnifyUrl.post(
        "/api/v1/auth/login",
        {},
        {
          headers: {
            Authorization: authHeader,
          },
        },
      );
      const accessToken = data.responseBody.accessToken;
      return accessToken;
    } catch (error) {
      console.error(
        error.response ? error.response.data.responseMessage : error.message,
      );
      const newmessage = error.response
        ? error.response.data.responseMessage
        : error.message;
      throw new Error(newmessage);
    }
  }

  async getAccount({
    userid,
    username,
    email,
    idtype,
    idnumber,
  }: {
    userid: string;
    username: string;
    email: string;
    idtype: string;
    idnumber: string;
  }) {
    try {
      const accessToken = await this.login();
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      };
      let requestBody:RequestBody = {};
      requestBody = {
        accountReference: userid,
        accountName: username,
        currencyCode: "NGN",
        contractCode: "832728158702",
        customerEmail: email,
        customerName: email,
        getAllAvailableBanks: true,
      };
      if (idtype === "bvn") {
        requestBody.bvn = idnumber;
      } else {
        requestBody.nin = idnumber;
      }
      const { data } = await MonnifyUrl.post(
        "/api/v2/bank-transfer/reserved-accounts",
        { headers },
      );
      if (data.requestSuccessful) {
        const accounts = data.responseBody.accounts;
        console.log(accounts);
        const result = {
          success: true,
          data: accounts,
        };
        return result;
      } else {
        const result = {
          success: true,
          data: null,
        };
        console.error(data)
        return result;
      }
      
    } catch (error) {
      console.error(error.response ? error.response.data.responseMessage : error.message);
      const newmessage = error.response ? error.response.data.responseMessage : error.message;
      throw newmessage;
    }
  }
}

const Monnify = new MonnifyModule(String(Secrets.MONNIFYSECRET),String(Secrets.MONNIFYCLIENT));

export default Monnify;