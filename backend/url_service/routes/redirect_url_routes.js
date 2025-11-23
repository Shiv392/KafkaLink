const express = require('express');
const redirect_url_routes = express.Router();
const redirect_url_controller = require('../controller/redirect_url_controller');

redirect_url_routes.get('/url/:url_code', redirect_url_controller);

module.exports = redirect_url_routes;