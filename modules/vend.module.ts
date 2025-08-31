import { VendUrl } from "../constants/link";

class VendifyModule {
  async getGiftCard() {
    try {
      const response = await VendUrl.get("/Product/Category/giftcard");
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
  async getAllProducts() {
    try {
      const response = await VendUrl.get("/Product/Categories");
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
  async getEsimProviders({country}) {
    try {
      const response = await VendUrl.get(`/Product/Category/esim?filters={"countryCode":"${country}"}`);
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
  async verifyEsimPrice({country,productID}) {
    console.log(productID)
    try {
      const response = await VendUrl.get(`/Product/Category/esim?filters={"countryCode":"${country}"}`);
      const responseArray: Array<any> = response.data.response;
      console.log(responseArray)
      if(responseArray.length === 0) {
        return null;
      }
      const preferredProvider = responseArray.filter((provider) => provider.productId === Number(productID));
      console.log("this is ",preferredProvider)
      return Number(preferredProvider[0].productCost) || null;
    } catch (error) {
      console.error(error);
      return null
    }
  }
  
  async purchaseEsim({productID,providerID,value,walletID,productCode,Account}:{productID:number,providerID:number,value:number,walletID:string,productCode:string,Account:string}) {
    try {
      const postData =JSON.stringify({ productId:productID, providerID, value, walletID, productCode, Account
      })
      const response = await VendUrl.post("/orders",postData);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
}

const Vendify = new VendifyModule()

export default Vendify;