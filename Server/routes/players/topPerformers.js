const topPerformersRequests = require("../../rapidApiRequests/playersRequests/topPerformersRequests");
const router = require("express").Router();

//GET THE 20 BEST PLAYERS SCORERS
router.get("/topPerformers/topScorersBySeason", async (req, res) => {
    let { season } = req.query;
    const topScorers = await topPerformersRequests.getTopScorers(season);
    res.status(200).send(topScorers);
})

//GET THE 20 BEST PLAYERS ASSISTS
router.get("/topPerformers/topAssistsBySeason", async (req, res) => {
    let { season } = req.query;
    const topAssists = await topPerformersRequests.getTopAssists(season);
    res.status(200).send(topAssists);
})

module.exports = router;