const playersStatsRequests = require("../rapidApiRequests/playersStatsRequests");
const router = require("express").Router();


//GET PLAYER STATS BY FIXTURE ID
router.get("/getPlayerStatsByFixtureId", async (req, res) => {
    let { fixtureId } = req.query;
    let { teamId } = req.query;
    const teamsStats = await playersStatsRequests.getPlayerStatsByFixtureId(fixtureId, teamId)
    res.status(200).send(teamsStats);
})











module.exports = router;
