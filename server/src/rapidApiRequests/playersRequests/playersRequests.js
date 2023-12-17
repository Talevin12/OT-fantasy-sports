const axios = require('axios');
const keys = require('../../../keys');
rapidApiConsts = require('../rapid_api_consts.json');

const getPlayersByTeam = async (teamId) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players/squads',
        params: {
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

module.exports = { getPlayersByTeam };