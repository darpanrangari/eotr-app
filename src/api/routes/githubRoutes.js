const express = require('express');
const { getRepos } = require('../controllers/githubController');
const router = express.Router();

router.get('/github/repos/:username', getRepos);

module.exports = router;
