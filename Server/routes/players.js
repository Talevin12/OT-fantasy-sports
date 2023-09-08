const playersRequests = require("../rapidApiRequests/playersRequests");
const router = require("express").Router();

//GET PLAYERS BY TEAM DATA
router.get("/getPlayersByTeam", async (req, res) => {
    let { teamId } = req.query;
    const PlayersByTeamData = await playersRequests.getPlayersByTeam(teamId);
    res.status(200).send(PlayersByTeamData);
})

//GET PLAYERS INFO AND STATS BY TEAM DATA
router.get("/getPlayersInfoAndStatsByTeam", async (req, res) => {
    let { teamId } = req.query;
    const PlayersInfoAndStatsByTeamData = await playersRequests.getPlayersInfoAndStatsByTeam(teamId);
    res.status(200).send(PlayersInfoAndStatsByTeamData);
})

module.exports = router;