const playersStatsRequests = require("../../rapidApiRequests/playersRequests/playersStatsRequests");
const router = require("express").Router();


//GET PLAYER STATS BY FIXTURE ID
router.get("/stats/getPlayerStatsByFixtureId", async (req, res) => {
    let { fixtureId, teamId } = req.query;
    const teamsStats = await playersStatsRequests.getPlayerStatsByFixtureId(fixtureId, teamId);
    res.status(200).send(teamsStats);
})

//GET PLAYERS SEASON INFO AND STATS BY TEAM DATA
router.get("/stats/getPlayersInfoAndStatsByTeam", async (req, res) => {
    let { teamId } = req.query;
    const PlayersInfoAndStatsByTeamData = await playersStatsRequests.getPlayersInfoAndStatsByTeam(teamId);
    res.status(200).send(PlayersInfoAndStatsByTeamData);
})

//GET PLAYERS SEASON INFO AND STATS BY TEAM DATA
router.get("/stats/getPlayerStatsBySeason", async (req, res) => {
    let { playerId, season } = req.query;
    const PlayerStatsBySeasonData = await playersStatsRequests.getPlayerStatsBySeason(playerId, season);
    res.status(200).send(PlayerStatsBySeasonData);
})

module.exports = router;