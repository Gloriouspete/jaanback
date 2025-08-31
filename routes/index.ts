
import { Router } from 'express';
import userRoutes from './user.routes';
import servicesRoutes from './services.routes';
import scheduleRoutes from './schedule.routes';
import paystackRoutes from './paystack.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/service', servicesRoutes);
router.use('/schedule', scheduleRoutes);
router.use('/paystack', paystackRoutes);
export default router;