const express = require('express');
const routes = express.Router();

routes.use('/',require('./posts'));
routes.use('/',require('./comments'));

module.exports = routes;