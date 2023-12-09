const axios = require('axios');
rapidApiConsts = require('./rapid_api_consts.json');

const getCurrentRound = async () => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds',
        params: {
            league: rapidApiConsts.EPL_LEAGUE_ID,
            season: rapidApiConsts.CURRENT_SEASON,
            current: true
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

module.exports = { getCurrentRound }