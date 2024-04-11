import githubController from '../controllers/githubController.js';
import { Router } from 'express';
// const { getRepos } = require('../controllers/githubController');
const router = Router();

// router.get('/github/repos/:username', getRepos);


router.get('/auth/:username', githubController.checkAuthenticationStatus);
router.get('/users/:username', githubController.getUser);
router.get('/users/:username/repos', githubController.getRepos);

export default router;
