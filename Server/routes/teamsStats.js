const teamsStatsRequests = require("../rapidApiRequests/teamsStatsRequests");
const router = require("express").Router();


//GET TEAM STATS
router.get("/getTeamStats", async (req, res) => {
    let { teamId } = req.query;
    let { season } = req.query;
    let { date } = req.query;
    const teamsStats = await teamsStatsRequests.getTeamsStats(teamId, season, date)
    res.status(200).send(teamsStats);
})











module.exports = router;
