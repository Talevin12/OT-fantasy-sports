const playersRequests = require("../rapidApiRequests/playersRequests");
const router = require("express").Router();

//GET PLAYERS BY TEAM DATA
router.get("/getPlayersByTeam", async (req, res) => {
    let { teamId } = req.query;
    const PlayersByTeamData = await playersRequests.getPlayersByTeam(teamId);
    res.status(200).send(PlayersByTeamData);
})

module.exports = router;