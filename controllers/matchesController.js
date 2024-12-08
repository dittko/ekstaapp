const matches = require('../data/matches.json');

exports.listMatches = (req, res) => {
  res.render('matches', { title: 'Ekstraklasa - Mecze', matches });
};

exports.getMatchesAsJson = (req, res) => {
  res.json(matches);  
};
