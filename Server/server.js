'use strict';

const express = require('express');
require('dotenv').config();

const players = require("./routes/players/players.js")
const teams = require("./routes/teams/teams.js")
const teamsStats = require("./routes/teams/teamsStats.js")
const playersStats = require("./routes/players/playersStats.js")
const injuries = require("./routes/injuries.js")
const fixtures = require("./routes/fixtures.js")

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World + ' + process.env.RAPID_API_KEY);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

app.use("/api/fixtures", fixtures);
app.use("/api/teams", teams);
app.use("/api/teams", teamsStats);
app.use("/api/players", players);
app.use("/api/players", playersStats);
app.use("/api/injuries", injuries);