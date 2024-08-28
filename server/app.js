const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const APP_VERSION = process.env.APP_VERSION;

const app = express();
app.use(cors());
app.use(express.json());

// Available routes
app.use(`/api/${APP_VERSION}/order`, require('./routes/order'));

module.exports = app;
