const express = require('express');
const routes = express.Router();

const postControler = require('../controlers/postControlers');

routes.get('/posts',postControler.index);
routes.get('/posts/new',postControler.create);

module.exports = routes;