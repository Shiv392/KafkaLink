const express = require('express');
const signup_routes = express.Router();
const signup_controller = require('../controller/signup_controller');

signup_routes.get('/post', signup_controller);

module.exports = signup_controller;