const axios = require('axios');
const keys = require('../../../keys');
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
            'X-RapidAPI-Key': keys.rapidAPI_key,
            'X-RapidAPI-Host': keys.rapidAPI_host
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const getPlayersInfoAndStatsByTeam = async (teamId, page) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        params: {
            team: teamId,
            league: rapidApiConsts.EPL_LEAGUE_ID,
            season: rapidApiConsts.CURRENT_SEASON,
            page: page
        },
        headers: {
            'X-RapidAPI-Key': keys.rapidAPI_key,
            'X-RapidAPI-Host': keys.rapidAPI_host
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
            'X-RapidAPI-Key': keys.rapidAPI_key,
            'X-RapidAPI-Host': keys.rapidAPI_host
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