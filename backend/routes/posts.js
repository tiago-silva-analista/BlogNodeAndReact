const express = require('express');
const routes = express.Router();

const postControler = require('../controlers/postControlers');

routes.get('/posts',postControler.index);

module.exports = routes;