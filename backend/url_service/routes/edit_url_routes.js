const express = require('express');
const edit_url_routes = express.Router();
const edit_url_controller = require('../controller/edit_url_controller');

edit_url_routes.put('/url', edit_url_controller);

module.exports = edit_url_routes;