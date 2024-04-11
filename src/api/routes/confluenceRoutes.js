const express = require('express');
const { getPage } = require('../controllers/confluenceController');
const router = express.Router();

router.get('/confluence/page/:pageId', getPage);

module.exports = router;
