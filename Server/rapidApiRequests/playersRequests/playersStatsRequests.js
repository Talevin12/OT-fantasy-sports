const axios = require('axios');
rapidApiConsts = require('../rapid_api_consts.json');

const getPlayerStatsByFixtureId = async (fixtureId, teamId) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/players',
        params: {
            fixture: fixtureId,
            team: teamId,

        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const getPlayersInfoAndStatsByTeam = async (teamId) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        params: {
            team: teamId,
            league: rapidApiConsts.EPL_LEAGUE_ID,
            season: rapidApiConsts.CURRENT_SEASON
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getPlayerStatsBySeason = async (playerId, season) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        params: {
            id: playerId,
            season: season
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getPlayerStatsByFixtureId, getPlayersInfoAndStatsByTeam, getPlayerStatsBySeason };