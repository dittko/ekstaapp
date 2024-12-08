const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController'); 

router.get('/compare/get', teamsController.compareTeamsGet); 
router.post('/compare/post', teamsController.compareTeamsPost); 
router.get('/', teamsController.showTeams);

module.exports = router;
