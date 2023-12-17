const axios = require('axios');
const keys = require('../../../keys');
rapidApiConsts = require('../rapid_api_consts.json');

const getTeamsStats = async (teamId, season, date) => {
    const params = {
        team: teamId,
        league: rapidApiConsts.EPL_LEAGUE_ID,
        season: season,
        date: date
    };

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
        params: params,
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

module.exports = { getTeamsStats };