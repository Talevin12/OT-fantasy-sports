const axios = require('axios');
rapidApiConsts = require('./rapid_api_consts.json');

const getFixturesByDate = async (date) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            date: date,
            league: rapidApiConsts.EPL_LEAGUE_ID,
            season: 2023
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

const getFixturesByTeam = async (season, teamId) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            league: rapidApiConsts.EPL_LEAGUE_ID,
            season: season,
            team: teamId
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
};

const getFixturesByRound = async (round) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            league: rapidApiConsts.EPL_LEAGUE_ID,
            season: rapidApiConsts.CURRENT_SEASON,
            round: 'Regular Season - ' + round
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

const getFixturesByIds = async (ids) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            ids: ids
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

const getLiveFixtures = async () => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            live: 'all',
            league: rapidApiConsts.EPL_LEAGUE_ID
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
};

const getLastXFixtures = async (x) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            last: x,
            league: rapidApiConsts.EPL_LEAGUE_ID
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

const getNextXFixtures = async (x) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            next: x,
            league: rapidApiConsts.EPL_LEAGUE_ID
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

const getLastXTeamFixtures = async (x, teamId) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            last: x,
            team: teamId,
            league: rapidApiConsts.EPL_LEAGUE_ID
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

const getNextXTeamFixtures = async (x, teamId) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            next: x,
            team: teamId,
            league: rapidApiConsts.EPL_LEAGUE_ID
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

module.exports = {
    getFixturesByDate, getFixturesByTeam, getFixturesByRound,
    getFixturesByIds, getLiveFixtures, getLastXFixtures,
    getNextXFixtures, getLastXTeamFixtures, getNextXTeamFixtures
};