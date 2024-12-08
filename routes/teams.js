const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController'); // Import kontrolera

router.get('/compare/get', teamsController.compareTeamsGet); // Używa funkcji GET
router.post('/compare/post', teamsController.compareTeamsPost); // Używa funkcji POST
router.get('/', teamsController.showTeams);
router.get('/game/:code', teamsController.playGame);

module.exports = router;
