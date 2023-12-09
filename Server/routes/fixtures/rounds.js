const roundsRequests = require("../../rapidApiRequests/roundsRequests");
const router = require("express").Router();

//GET CURRENT ROUND DATA
router.get("/rounds/getCurrentRound", async (req, res) => {
    const CurrentRoundData = await roundsRequests.getCurrentRound();
    res.status(200).send(CurrentRoundData);
})

module.exports = router;