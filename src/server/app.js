const express = require('express');
const rootRouter = require('../Controllers/rootRouter');
const ErrorMiddleware = require('../middleware/ErrorMiddleware');

const app = express();

app.use(express.json());

rootRouter(app);

app.use(ErrorMiddleware);

module.exports = app;
