const express = require('express');
const routes = express.Router();
const login_routes = require('./login_routes');
const signup_routes = require('./signup_routes');

routes.use('/auth',login_routes);
routes.use('/auth',signup_routes);

module.exports = routes;