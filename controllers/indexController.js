const path = require('path');

exports.home = (req, res) => {
    res.render('index', { title: 'Ekstraklasa - Strona Główna' });
};

// Endpoint do pobierania regulaminu w formacie PDF
exports.downloadRegulamin = (req, res) => {
    const filePath = path.join(__dirname, '..', 'data', '5422-Regulamin Ekstraklasy 2023-2024 z dn. 27.03.2023.pdf');
    res.download(filePath, 'Regulamin_Ekstraklasy_2023-2024.pdf', (err) => {
        if (err) {
            console.error('Błąd podczas próby pobrania pliku:', err);
            res.status(500).send('Wystąpił błąd podczas próby pobrania pliku.');
        }
    });
};
