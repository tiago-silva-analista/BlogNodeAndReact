const express = require('express');
const routes = express.Router();

const comentControler = require('../controlers/commentControlers');

routes.get('/comments/:postId',comentControler.index);
routes.get('/comments/:postId',comentControler.create);

module.exports = routes;