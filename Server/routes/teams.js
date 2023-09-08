const teamsRequests = require("../rapidApiRequests/teamsRequests");
const router = require("express").Router();


//GET TEAM BY ID
router.get("/getTeamById", async (req, res) => {
    let { teamId } = req.query;
    const teamsByIdData = await teamsRequests.getTeamById(teamId);
    res.status(200).send(teamsByIdData);
})

//GET TEAMS STANDINGS BY SEASON
router.get("/standingsBySeason", async (req, res) => {
    let { season } = req.query;
    if (!season) {
        season = process.env.CURRENT_SEASON;
    }
    const standingsBySeason = await teamsRequests.getTeamsStandingsBySeason(season);
    res.status(200).send(standingsBySeason);
})










module.exports = router;
