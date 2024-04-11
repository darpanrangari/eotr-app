import { Router } from 'express';
import { getPage } from '../controllers/confluenceController.js';
const router = Router();

router.get('/confluence/page/:pageId', getPage);

export default router;
