const express = require('express');
const get_url_routes = express.Router();
const get_url_controller = require('../controller/get_url_controller');
const jwt_authentication = require('../middlewars/jwt_authentication');

get_url_routes.get('/url', jwt_authentication, get_url_controller);

module.exports = get_url_routes;