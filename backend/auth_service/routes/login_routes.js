const express = require('express');
const login_routes = express.Router();
const login_controller = require('../controller/login_controller');

login_routes.get('/login', login_controller);

module.exports = login_routes;