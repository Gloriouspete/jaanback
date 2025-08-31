import { Router } from 'express';
const router = Router();
import * as Controller from "../controllers/index.ts";
import { validateAirtimePurchase } from '../validators/airtime.ts';
import authenticateJWT from '../middleware/auth.ts';
router.use(authenticateJWT);
router.post("/airtime",  Controller.scheduleAirtime);
router.post("/internet", Controller.scheduleData);
router.post("/cable",  Controller.scheduleCable);
router.post("/electric",  Controller.scheduleElectric);
router.post("/fetch",  Controller.scheduleFetch);
router.post("/edit",  Controller.scheduleEdit);

export default router;