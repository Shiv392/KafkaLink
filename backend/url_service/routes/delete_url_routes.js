const express = require('express');
const delete_url_routes = express.Router();
const delete_url_controller = require('../controller/delete_url_controller');

delete_url_routes.delete('/url', delete_url_controller);

module.exports = delete_url_routes;