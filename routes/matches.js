const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matchesController');

router.get('/', matchesController.listMatches);

router.get('/json', matchesController.getMatchesAsJson);

module.exports = router;
