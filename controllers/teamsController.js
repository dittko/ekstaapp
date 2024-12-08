const statsTypes = [
    'goalsScored', 'homeWins', 'awayWins', 'matches', 
    'points', 'wins', 'draws', 'losses', 'goals', 
    'homeDraws', 'homeLosses', 'homeGoals', 
    'awayDraws', 'awayLosses', 'awayGoals'
];
const teamStats = {
    'Lech Poznań': { 
        goalsScored: 25, homeWins: 6, awayWins: 4, 
        matches: 14, points: 31, wins: 10, draws: 1, losses: 3, 
        goals: '25-10', homeDraws: 0, homeLosses: 1, homeGoals: '16-4', 
        awayDraws: 1, awayLosses: 2, awayGoals: '9-6' 
    },
    'Jagiellonia Białystok': { 
        goalsScored: 26, homeWins: 5, awayWins: 5, 
        matches: 14, points: 31, wins: 10, draws: 1, losses: 3, 
        goals: '26-19', homeDraws: 1, homeLosses: 1, homeGoals: '14-8', 
        awayDraws: 0, awayLosses: 2, awayGoals: '12-11' 
    },
    'Raków Częstochowa': { 
        goalsScored: 17, homeWins: 4, awayWins: 5, 
        matches: 14, points: 30, wins: 9, draws: 3, losses: 2, 
        goals: '17-4', homeDraws: 1, homeLosses: 2, homeGoals: '9-3', 
        awayDraws: 2, awayLosses: 0, awayGoals: '8-1' 
    },
    'Cracovia': { 
        goalsScored: 30, homeWins: 3, awayWins: 6, 
        matches: 14, points: 29, wins: 9, draws: 2, losses: 3, 
        goals: '30-20', homeDraws: 2, homeLosses: 2, homeGoals: '14-12', 
        awayDraws: 0, awayLosses: 1, awayGoals: '16-8' 
    },
    'Legia Warszawa': { 
        goalsScored: 26, homeWins: 5, awayWins: 2, 
        matches: 14, points: 25, wins: 7, draws: 4, losses: 3, 
        goals: '26-14', homeDraws: 1, homeLosses: 2, homeGoals: '19-9', 
        awayDraws: 3, awayLosses: 1, awayGoals: '7-5' 
    },
    'Pogoń Szczecin': { 
        goalsScored: 21, homeWins: 7, awayWins: 0, 
        matches: 14, points: 22, wins: 7, draws: 1, losses: 6, 
        goals: '21-19', homeDraws: 0, homeLosses: 0, homeGoals: '15-4', 
        awayDraws: 1, awayLosses: 6, awayGoals: '6-15' 
    },
    'Piast Gliwice': { 
        goalsScored: 16, homeWins: 2, awayWins: 3, 
        matches: 14, points: 20, wins: 5, draws: 5, losses: 4, 
        goals: '16-14', homeDraws: 3, homeLosses: 1, homeGoals: '9-7', 
        awayDraws: 2, awayLosses: 3, awayGoals: '7-7' 
    },
    'Widzew Łódź': { 
        goalsScored: 18, homeWins: 3, awayWins: 2, 
        matches: 14, points: 19, wins: 5, draws: 4, losses: 5, 
        goals: '18-19', homeDraws: 1, homeLosses: 2, homeGoals: '6-6', 
        awayDraws: 3, awayLosses: 3, awayGoals: '12-13' 
    },
    'Górnik Zabrze': { 
        goalsScored: 18, homeWins: 3, awayWins: 2, 
        matches: 14, points: 18, wins: 5, draws: 3, losses: 6, 
        goals: '18-17', homeDraws: 1, homeLosses: 3, homeGoals: '9-7', 
        awayDraws: 2, awayLosses: 3, awayGoals: '9-10' 
    },
    'Zagłębie Lubin': { 
        goalsScored: 14, homeWins: 4, awayWins: 1, 
        matches: 14, points: 18, wins: 5, draws: 3, losses: 6, 
        goals: '14-19', homeDraws: 1, homeLosses: 2, homeGoals: '9-6', 
        awayDraws: 2, awayLosses: 4, awayGoals: '5-13' 
    },
    'Motor Lublin': { 
        goalsScored: 19, homeWins: 3, awayWins: 2, 
        matches: 14, points: 18, wins: 5, draws: 3, losses: 6, 
        goals: '19-25', homeDraws: 2, homeLosses: 3, homeGoals: '11-12', 
        awayDraws: 1, awayLosses: 3, awayGoals: '8-13' 
    },
    'GKS Katowice': { 
        goalsScored: 20, homeWins: 2, awayWins: 2, 
        matches: 14, points: 16, wins: 4, draws: 4, losses: 6, 
        goals: '20-19', homeDraws: 3, homeLosses: 3, homeGoals: '10-9', 
        awayDraws: 1, awayLosses: 3, awayGoals: '10-10' 
    },
    'Korona Kielce': { 
        goalsScored: 12, homeWins: 2, awayWins: 2, 
        matches: 14, points: 15, wins: 4, draws: 3, losses: 7, 
        goals: '12-22', homeDraws: 0, homeLosses: 4, homeGoals: '6-9', 
        awayDraws: 3, awayLosses: 3, awayGoals: '6-13' 
    },
    'Radomiak Radom': { 
        goalsScored: 18, homeWins: 3, awayWins: 1, 
        matches: 13, points: 13, wins: 4, draws: 1, losses: 8, 
        goals: '18-21', homeDraws: 1, homeLosses: 3, homeGoals: '12-9', 
        awayDraws: 0, awayLosses: 5, awayGoals: '6-12' 
    },
    'Stal Mielec': { 
        goalsScored: 12, homeWins: 3, awayWins: 0, 
        matches: 14, points: 12, wins: 3, draws: 3, losses: 8, 
        goals: '12-19', homeDraws: 2, homeLosses: 2, homeGoals: '8-7', 
        awayDraws: 1, awayLosses: 6, awayGoals: '4-12' 
    },
    'Puszcza Niepołomice': { 
        goalsScored: 13, homeWins: 2, awayWins: 0, 
        matches: 14, points: 11, wins: 2, draws: 5, losses: 7, 
        goals: '13-23', homeDraws: 3, homeLosses: 2, homeGoals: '11-13', 
        awayDraws: 2, awayLosses: 5, awayGoals: '2-10' 
    },
    'Śląsk Wrocław': { 
        goalsScored: 13, homeWins: 2, awayWins: 0, 
        matches: 14, points: 9, wins: 2, draws: 3, losses: 9, 
        goals: '13-25', homeDraws: 0, homeLosses: 4, homeGoals: '9-11', 
        awayDraws: 3, awayLosses: 5, awayGoals: '4-14' 
    }
};

// GET Request
exports.compareTeamsGet = (req, res) => {
    const { team1, team2, statsType } = req.query;
    const comparisonResults = [];

    if (team1 && team2 && statsType && teamStats[team1] && teamStats[team2]) {
        comparisonResults.push(
            { team: team1, value: teamStats[team1][statsType], stat: statsType },
            { team: team2, value: teamStats[team2][statsType], stat: statsType }
        );
    }

    res.render('teams', {
        title: `Porównanie drużyn (GET)`,
        teams: Object.keys(teamStats),
        statsTypes,
        comparisonResults: comparisonResults || [] 
    });
};

// POST Request
exports.compareTeamsPost = (req, res) => {
    const { team1, team2, statsType } = req.body;
    const comparisonResults = [];

    if (team1 && team2 && statsType && teamStats[team1] && teamStats[team2]) {
        comparisonResults.push(
            { team: team1, value: teamStats[team1][statsType], stat: statsType },
            { team: team2, value: teamStats[team2][statsType], stat: statsType }
        );
    }

    res.render('teams', {
        title: `Porównanie drużyn (POST)`,
        teams: Object.keys(teamStats),
        statsTypes,
        comparisonResults: comparisonResults || []  
    });
};

exports.showTeams = (req, res) => {
    const teamsData = Object.entries(teamStats).map(([team, stats]) => ({
        team,
        ...stats
    }));

    res.render('teams', {
        title: 'Lista drużyn i statystyki',
        teams: Object.keys(teamStats), 
        teamsData, 
        statsTypes 
    });
};

