const axios = require('axios');


const getTeamsStats = async (teamId, season, date) => {
    const params = {
        team: teamId,
        league: process.env.EPL_LEAGUE_ID,
        season: season,
        date: date
    };
    
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
        params: params,
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



module.exports = {getTeamsStats };
