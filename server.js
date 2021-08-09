const express = require('express');
const cors = require('cors');
const router = require('./controllers/routes.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

module.exports = app;
