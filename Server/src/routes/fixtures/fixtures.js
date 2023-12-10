const fixturesRequests = require("../../rapidApiRequests/fixturesRequests");
const router = require("express").Router();

//GET FIXTURES BY DATE DATA
router.get("/getFixturesByDate", async (req, res) => {
    let { date } = req.query;
    const fixturesByDateData = await fixturesRequests.getFixturesByDate(date);
    res.status(200).send(fixturesByDateData);
})

//GET FIXTURES BY TEAM DATA
router.get("/getFixturesByTeam", async (req, res) => {
    let { season, teamId } = req.query;
    const fixturesByTeamData = await fixturesRequests.getFixturesByTeam(season, teamId);
    res.status(200).send(fixturesByTeamData);
})

//GET FIXTURES BY TEAM DATA
router.get("/getFixturesByTeam", async (req, res) => {
    let { season, teamId } = req.query;
    const fixturesByTeamData = await fixturesRequests.getFixturesByTeam(season, teamId);
    res.status(200).send(fixturesByTeamData);
})

//GET FIXTURES BY ROUND DATA
router.get("/getFixturesByRound", async (req, res) => {
    let { round } = req.query;
    const fixturesByRoundData = await fixturesRequests.getFixturesByRound(round);
    res.status(200).send(fixturesByRoundData);
})

router.get("/getFixturesByIds", async (req, res) => {
    let { ids } = req.query;
    const fixturesByIdsData = await fixturesRequests.getFixturesByIds(ids);
    res.status(200).send(fixturesByIdsData);
})

//GET LIVE FIXTURES DATA
router.get("/getLiveFixturesData", async (req, res) => {
    const liveFixturesData = await fixturesRequests.getLiveFixtures();
    res.status(200).send(liveFixturesData);
})

//GET LAST X FIXTURES DATA
router.get("/getLastXFixturesData", async (req, res) => {
    let { x } = req.query;
    const lastXFixturesData = await fixturesRequests.getLastXFixtures(x);
    res.status(200).send(lastXFixturesData);
})

//GET NEXT X FIXTURES DATA
router.get("/getNextXFixturesData", async (req, res) => {
    let { x } = req.query;
    const nextXFixturesData = await fixturesRequests.getNextXFixtures(x);
    res.status(200).send(nextXFixturesData);
})

//GET LAST X FIXTURES DATA
router.get("/getLastXTeamFixturesData", async (req, res) => {
    let { x, teamId } = req.query;
    const lastXTeamFixturesData = await fixturesRequests.getLastXTeamFixtures(x, teamId);
    res.status(200).send(lastXTeamFixturesData);
})

//GET NEXT X FIXTURES DATA
router.get("/getNextXTeamFixturesData", async (req, res) => {
    let { x, teamId } = req.query;
    const nextXTeamFixturesData = await fixturesRequests.getNextXTeamFixtures(x, teamId);
    res.status(200).send(nextXTeamFixturesData);
})

module.exports = router;