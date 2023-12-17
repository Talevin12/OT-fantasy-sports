'use strict';

const express = require('express');

const keys = require('../keys.js');

const cors = require('cors');
const apiIndex = require('./routes/apiIndex');
const setupRoutes = require('./routeSetup');
// const mongoose = require('mongoose');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';
console.error(keys.mongo_url);

// App
const app = express();

app.use(cors());

// mongoose.connect(keys.mongo_url)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

app.get('/', (req, res) => {
  res.send('Hello There');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

setupRoutes(app, apiIndex);