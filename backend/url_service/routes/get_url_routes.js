const express = require('express');
const get_url_routes = express.Router();
const get_url_controller = require('../controller/get_url_controller');

get_url_routes.get('/url', get_url_controller);

module.exports = get_url_routes;