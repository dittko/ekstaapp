const express = require('express');
const path = require('path');
const logger = require('./config/logger'); // Import middleware

const app = express();

// Ścieżki do tras
const indexRoutes = require('./routes/index');
const matchesRoutes = require('./routes/matches');
const playersRoutes = require('./routes/players');
const standingsRoutes = require('./routes/standings');
const teamsRoutes = require('./routes/teams');
const galleryRoutes = require('./routes/gallery'); // Nowa trasa galerii

app.use(express.urlencoded({ extended: true }));

// Middleware globalny
app.use(logger); // Aktywuj middleware rejestrujący żądania

// Middleware do obsługi plików statycznych
app.use(express.static(path.join(__dirname, 'public')));

// Ustawienia widoków
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Obsługa tras
app.use('/', indexRoutes);
app.use('/matches', matchesRoutes);
app.use('/players', playersRoutes);
app.use('/standings', standingsRoutes);
app.use('/teams', teamsRoutes);
app.use('/', galleryRoutes); // Dodajemy trasę galerii

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
