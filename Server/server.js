'use strict';

const express = require('express');
require('dotenv').config();

const cors = require('cors');
const apiIndex = require('./routes/apiIndex');
const setupRoutes = require('./routeSetup');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World + ' + process.env.RAPID_API_KEY);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

setupRoutes(app, apiIndex);
