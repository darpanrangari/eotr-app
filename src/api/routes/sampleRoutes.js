import { Router } from 'express';
const router = Router();
import { sampleGetController } from '../controllers/sampleController';

router.get('/sample', sampleGetController);

export default router;
