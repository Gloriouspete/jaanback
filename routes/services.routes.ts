import { Router } from 'express';
const router = Router();
import * as Controller from "../controllers/index.ts";
import { validateAirtimePurchase } from '../validators/airtime.ts';
import authenticateJWT from '../middleware/auth.ts';
import { validateDataFetch, validateDataPurchase } from '../validators/data.ts';
import { validateCableFetch, validateCablePurchase } from '../validators/cable.ts';
router.use(authenticateJWT);
router.post("/airtime/purchase", validateAirtimePurchase, Controller.purchaseAirtime);
router.post("/data/purchase", validateDataPurchase, Controller.purchaseData);
router.post("/data/fetch", validateDataFetch, Controller.fetchData);
router.post("/cable/fetch",validateCableFetch, Controller.fetchCable);
router.post("/cable/purchase",validateCablePurchase,  Controller.purchaseCable);
router.post("/electric/purchase",  Controller.purchaseElectric);
router.get("/electric/fetch",  Controller.fetchElectric);
router.post("/electric/verify",  Controller.verifyElectricName);
router.post("/jamb/purchase",  Controller.purchaseJamb);
router.get("/jamb/fetch",  Controller.fetchJamb);
router.post("/jamb/verify",  Controller.verifyJambName);
router.post("/jtoken/convert",  Controller.convertJtoken);
router.post("/voucher/redeem",  Controller.redeemVoucher);
router.post("/voucher/buy",  Controller.buyVoucher);
router.get("/intl/country", Controller.fetchIntlCountries);
router.post("/intl/operators",Controller.fetchIntlOperators)
router.post("/intl/products",Controller.fetchIntlProducts)
router.post("/intl/verify",Controller.verifyIntlName)
router.get("/esim",Controller.fetchEsimProviders)
router.post("/esim/purchase",Controller.purchaseEsim)
router.get("/giftcard",Controller.fetchGiftcardProviders)


export default router;