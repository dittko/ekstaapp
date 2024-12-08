const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Strona główna
router.get('/', indexController.home);

// Pobieranie regulaminu
router.get('/download-regulamin', indexController.downloadRegulamin);

module.exports = router;
