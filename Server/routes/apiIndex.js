const players = require("./players/players.js")
const teams = require("./teams/teams.js")
const teamsStats = require("./teams/teamsStats.js")
const playersStats = require("./players/playersStats.js")
const topPerformers = require("./players/topPerformers.js")
const injuries = require("./injuries.js")
const fixtures = require("./fixtures.js")

module.exports = {
    players: players,
    teams: teams,
    teamsStats: teamsStats,
    playersStats: playersStats,
    topPerformers: topPerformers,
    injuries: injuries,
    fixtures: fixtures,
}