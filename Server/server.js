'use strict';

const express = require('express');
require('dotenv').config();

const apiIndex = require('./apiIndex');

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

app.use("/api/fixtures", apiIndex.fixtures);
app.use("/api/teams", apiIndex.teams);
app.use("/api/teams", apiIndex.teamsStats);
app.use("/api/players", apiIndex.players);
app.use("/api/players", apiIndex.playersStats);
app.use("/api/players", apiIndex.topPerformers);
app.use("/api/injuries", apiIndex.injuries);