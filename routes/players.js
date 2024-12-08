const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');

router.get('/', playersController.listPlayers);

module.exports = router;
