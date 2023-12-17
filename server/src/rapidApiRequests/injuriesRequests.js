const axios = require('axios');
const keys = require('../../keys');
rapidApiConsts = require('./rapid_api_consts.json');

const getAllCurrentInjuries = async (date) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/injuries',
        params: {
            league: rapidApiConsts.EPL_LEAGUE_ID,
            date: date
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

const getInjuriesByFixture = async (fixtureId) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/injuries',
        params: {
            fixture: fixtureId
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

module.exports = { getAllCurrentInjuries, getInjuriesByFixture };