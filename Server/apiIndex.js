const players = require("./routes/players/players.js")
const teams = require("./routes/teams/teams.js")
const teamsStats = require("./routes/teams/teamsStats.js")
const playersStats = require("./routes/players/playersStats.js")
const topPerformers = require("./routes/players/topPerformers.js")
const injuries = require("./routes/injuries.js")
const fixtures = require("./routes/fixtures.js")

module.exports = {
    players: players,
    teams: teams,
    teamsStats: teamsStats,
    playersStats: playersStats,
    topPerformers: topPerformers,
    injuries: injuries,
    fixtures: fixtures,
}