exports.listPlayers = (req, res) => {
    const players = {
        scorers: [
            { rank: 1, name: "Benjamin Kaellman", team: "Cracovia", goals: 10, assists: 6 },
            { rank: 2, name: "Leonardo Miramar Rocha", team: "Radomiak", goals: 10, assists: 0 },
            { rank: 3, name: "Mikael Ishak", team: "Lech Poznań", goals: 9, assists: 3 },
            { rank: 4, name: "Jesús Imaz", team: "Jagiellonia Białystok", goals: 8, assists: 3 },
            { rank: 5, name: "Samuel Mraz", team: "Motor Lublin", goals: 7, assists: 2 },
            { rank: 6, name: "Rondić", team: "Widzew Łódź", goals: 7, assists: 2 },
            { rank: 7, name: "Efthimios Koulouris", team: "Pogoń Szczecin", goals: 7, assists: 0 },
            { rank: 8, name: "Afonso Sousa", team: "Lech Poznań", goals: 5, assists: 5 }
        ],
        cards: [
            { rank: 1, name: "Gustav Berggren", team: "Raków Częstochowa", yellow_cards: 6, red_cards: 1 },
            { rank: 2, name: "Mariusz Fornalczyk", team: "Korona Kielce", yellow_cards: 6, red_cards: 0 },
            { rank: 3, name: "Jurgen Celhaka", team: "Lech Poznań", yellow_cards: 5, red_cards: 0 },
            { rank: 4, name: "Pllana", team: "Lechia Gdańsk", yellow_cards: 5, red_cards: 0 },
            { rank: 5, name: "Milos Trojak", team: "Korona Kielce", yellow_cards: 5, red_cards: 0 },
            { rank: 6, name: "Antonio Milic", team: "Lech Poznań", yellow_cards: 5, red_cards: 0 },
            { rank: 7, name: "Otar Kakabadze", team: "Cracovia", yellow_cards: 5, red_cards: 0 },
            { rank: 8, name: "Christos Donis", team: "Radomiak", yellow_cards: 5, red_cards: 0 }
        ]
    };

    const statsType = req.query.filter || 'scorers';  
    const selectedPlayers = players[statsType];  

    if (statsType === 'scorers') {
        selectedPlayers.forEach(player => {
            player.kk = player.goals + player.assists;
        });
    }

    res.render('players', { 
        title: 'Ekstraklasa - Zawodnicy',
        players: selectedPlayers,
        filter: statsType
    });
};
