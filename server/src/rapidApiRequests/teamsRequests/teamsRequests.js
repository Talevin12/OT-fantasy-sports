const axios = require('axios');
rapidApiConsts = require('../rapid_api_consts.json');

const getTeamById = async (teamId) => {
  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
    params: {
      id: teamId,
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
};

const getTeamsStandingsBySeason = async (season) => {
  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    params: {
      season: season,
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

module.exports = { getTeamById, getTeamsStandingsBySeason };