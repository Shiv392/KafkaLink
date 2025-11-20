const express = require('express');
const add_url_routes = express.Router();
const add_url_controller = require('../controller/add_url_controller');

add_url_routes.post('/url', add_url_controller);

module.exports = add_url_routes;