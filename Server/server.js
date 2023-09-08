'use strict';

const express = require('express');
require('dotenv').config()

const tables = require("./routes/tables.js")
const players = require("./routes/players.js")
const teams = require("./routes/teams.js")
const teamsStats = require("./routes/teamsStats.js")
const playersStats = require("./routes/playersStats.js")
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

app.use("/api/tables", tables);
app.use("/api/players", players);
app.use("/api/fixtures", fixtures);
app.use("/api/teams", teams);
app.use("/api/teamsStats", teamsStats);
app.use("/api/playersStats", playersStats);