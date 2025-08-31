import { Router } from 'express';
const router = Router();
import * as Controller from "../controllers/index.ts";

router.post("/webhook",  Controller.PaystackWebhook);


export default router;