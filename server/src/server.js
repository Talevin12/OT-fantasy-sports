'use strict';

const express = require('express');
require('dotenv').config();

const cors = require('cors');
const apiIndex = require('./routes/apiIndex');
const setupRoutes = require('./routeSetup');
// const mongoose = require("mongoose");


// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST //|| 'ot-fantasy-sports-node-server.eba-8zfjic2b.eu-north-1.elasticbeanstalk.com';

// App
const app = express();

app.use(cors());

// mongoose.connect(process.env.MONGO_URL)
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