const express = require('express');
const path = require('path');
const logger = require('./config/logger');

const app = express();

const indexRoutes = require('./routes/index');
const matchesRoutes = require('./routes/matches');
const playersRoutes = require('./routes/players');
const standingsRoutes = require('./routes/standings');
const teamsRoutes = require('./routes/teams');
const galleryRoutes = require('./routes/gallery'); 

app.use(express.urlencoded({ extended: true }));

app.use(logger); 

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRoutes);
app.use('/matches', matchesRoutes);
app.use('/players', playersRoutes);
app.use('/standings', standingsRoutes);
app.use('/teams', teamsRoutes);
app.use('/', galleryRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
