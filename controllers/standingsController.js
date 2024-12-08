// standingsController.js
exports.showStandings = (req, res) => {
    const teams = [
        {
            name: "Lech Poznań",
            matches: 14,
            points: 31,
            won: 10,
            draw: 1,
            lost: 3,
            goals: "25-10",
            home: { won: 6, draw: 0, lost: 1, goals: "16-4" },
            away: { won: 4, draw: 1, lost: 2, goals: "9-6" }
        },
        {
            name: "Jagiellonia Białystok",
            matches: 14,
            points: 31,
            won: 10,
            draw: 1,
            lost: 3,
            goals: "26-19",
            home: { won: 5, draw: 1, lost: 1, goals: "14-8" },
            away: { won: 5, draw: 0, lost: 2, goals: "12-11" }
        },
        {
            name: "Raków Częstochowa",
            matches: 14,
            points: 30,
            won: 9,
            draw: 3,
            lost: 2,
            goals: "17-4",
            home: { won: 4, draw: 1, lost: 2, goals: "9-3" },
            away: { won: 5, draw: 2, lost: 0, goals: "8-1" }
        },
        {
            name: "Cracovia",
            matches: 14,
            points: 29,
            won: 9,
            draw: 2,
            lost: 3,
            goals: "30-20",
            home: { won: 3, draw: 2, lost: 2, goals: "14-12" },
            away: { won: 6, draw: 0, lost: 1, goals: "16-8" }
        },
        {
            name: "Legia Warszawa",
            matches: 14,
            points: 25,
            won: 7,
            draw: 4,
            lost: 3,
            goals: "26-14",
            home: { won: 5, draw: 1, lost: 2, goals: "19-9" },
            away: { won: 2, draw: 3, lost: 1, goals: "7-5" }
        },
        {
            name: "Pogoń Szczecin",
            matches: 14,
            points: 22,
            won: 7,
            draw: 1,
            lost: 6,
            goals: "21-19",
            home: { won: 7, draw: 0, lost: 0, goals: "15-4" },
            away: { won: 0, draw: 1, lost: 6, goals: "6-15" }
        },
        {
            name: "Piast Gliwice",
            matches: 14,
            points: 20,
            won: 5,
            draw: 5,
            lost: 4,
            goals: "16-14",
            home: { won: 2, draw: 3, lost: 1, goals: "9-7" },
            away: { won: 3, draw: 2, lost: 3, goals: "7-7" }
        },
        {
            name: "Widzew Łódź",
            matches: 14,
            points: 19,
            won: 5,
            draw: 4,
            lost: 5,
            goals: "18-19",
            home: { won: 3, draw: 1, lost: 2, goals: "6-6" },
            away: { won: 2, draw: 3, lost: 3, goals: "12-13" }
        },
        {
            name: "Górnik Zabrze",
            matches: 14,
            points: 18,
            won: 5,
            draw: 3,
            lost: 6,
            goals: "18-17",
            home: { won: 3, draw: 1, lost: 3, goals: "9-7" },
            away: { won: 2, draw: 2, lost: 3, goals: "9-10" }
        },
        {
            name: "Zagłębie Lubin",
            matches: 14,
            points: 18,
            won: 5,
            draw: 3,
            lost: 6,
            goals: "14-19",
            home: { won: 4, draw: 1, lost: 2, goals: "9-6" },
            away: { won: 1, draw: 2, lost: 4, goals: "5-13" }
        },
        {
            name: "Motor Lublin",
            matches: 14,
            points: 18,
            won: 5,
            draw: 3,
            lost: 6,
            goals: "19-25",
            home: { won: 3, draw: 2, lost: 3, goals: "11-12" },
            away: { won: 2, draw: 1, lost: 3, goals: "8-13" }
        },
        {
            name: "GKS Katowice",
            matches: 14,
            points: 16,
            won: 4,
            draw: 4,
            lost: 6,
            goals: "20-19",
            home: { won: 2, draw: 3, lost: 3, goals: "10-9" },
            away: { won: 2, draw: 1, lost: 3, goals: "10-10" }
        },
        {
            name: "Korona Kielce",
            matches: 14,
            points: 15,
            won: 4,
            draw: 3,
            lost: 7,
            goals: "12-22",
            home: { won: 2, draw: 0, lost: 4, goals: "6-9" },
            away: { won: 2, draw: 3, lost: 3, goals: "6-13" }
        },
        {
            name: "Radomiak Radom",
            matches: 13,
            points: 13,
            won: 4,
            draw: 1,
            lost: 8,
            goals: "18-21",
            home: { won: 3, draw: 1, lost: 3, goals: "12-9" },
            away: { won: 1, draw: 0, lost: 5, goals: "6-12" }
        },
        {
            name: "Stal Mielec",
            matches: 14,
            points: 12,
            won: 3,
            draw: 3,
            lost: 8,
            goals: "12-19",
            home: { won: 3, draw: 2, lost: 2, goals: "8-7" },
            away: { won: 0, draw: 1, lost: 6, goals: "4-12" }
        },
        {
            name: "Puszcza Niepołomice",
            matches: 14,
            points: 11,
            won: 2,
            draw: 5,
            lost: 7,
            goals: "13-23",
            home: { won: 2, draw: 3, lost: 2, goals: "11-13" },
            away: { won: 0, draw: 2, lost: 5, goals: "2-10" }
        },
        {
            name: "Śląsk Wrocław",
            matches: 14,
            points: 9,
            won: 2,
            draw: 3,
            lost: 9,
            goals: "13-25",
            home: { won: 2, draw: 0, lost: 4, goals: "9-11" },
            away: { won: 0, draw: 3, lost: 5, goals: "4-14" }
        }
    ];

    res.render('standings', { title: 'Ekstraklasa - Tabela Ligowa', teams });
};