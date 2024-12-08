const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.home);

router.get('/download-regulamin', indexController.downloadRegulamin);

module.exports = router;
