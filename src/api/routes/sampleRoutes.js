const express = require('express');
const router = express.Router();
const { sampleGetController } = require('../controllers/sampleController');

router.get('/sample', sampleGetController);

module.exports = router;
