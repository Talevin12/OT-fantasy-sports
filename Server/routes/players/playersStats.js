const playersStatsRequests = require("../../rapidApiRequests/playersRequests/playersStatsRequests");
const router = require("express").Router();


//GET PLAYER STATS BY FIXTURE ID
router.get("/stats/getPlayerStatsByFixtureId", async (req, res) => {
    let { fixtureId } = req.query;
    let { teamId } = req.query;
    const teamsStats = await playersStatsRequests.getPlayerStatsByFixtureId(fixtureId, teamId)
    res.status(200).send(teamsStats);
})

//GET PLAYERS SEASON INFO AND STATS BY TEAM DATA
router.get("/stats/getPlayersInfoAndStatsByTeam", async (req, res) => {
    let { teamId } = req.query;
    const PlayersInfoAndStatsByTeamData = await playersRequests.getPlayersInfoAndStatsByTeam(teamId);
    res.status(200).send(PlayersInfoAndStatsByTeamData);
})

module.exports = router;