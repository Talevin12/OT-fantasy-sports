const axios = require('axios');
rapidApiConsts = require('../rapid_api_consts.json');

const getTopScorers = async (season) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
        params: {
            league: rapidApiConsts.EPL_LEAGUE_ID,
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

const getTopAssists = async (season) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players/topassists',
        params: {
            league: rapidApiConsts.EPL_LEAGUE_ID,
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

module.exports = { getTopScorers, getTopAssists };