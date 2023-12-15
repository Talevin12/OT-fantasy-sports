const injuriesRequests = require("../rapidApiRequests/injuriesRequests");
const router = require("express").Router();

//GET ALL CURRENT INJURIES
router.get("/getAllCurrentInjuries", async (req, res) => {
    const date = new Date().toISOString().split('T')[0];
    const allCurrentInjuries = await injuriesRequests.getAllCurrentInjuries(date);
    res.status(200).send(allCurrentInjuries);
})

//GET INJURIES BY FIXTURES
router.get("/getInjuriesByFixture", async (req, res) => {
    let { fixtureId } = req.query;
    const fixtureInjuries = await injuriesRequests.getInjuriesByFixture(fixtureId);
    res.status(200).send(fixtureInjuries);
})

module.exports = router;