const express = require('express');
const get_url_list_routes = express.Router();
const get_url_list_controller = require('../controller/get_all_url_controller');

get_url_list_routes.get('/url', get_url_list_controller);

module.exports = get_url_list_routes;