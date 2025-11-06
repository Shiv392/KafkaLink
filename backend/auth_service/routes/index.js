const express = require('express');
const routes = express.Router();
const login_routes = require('./login_routes');
const signup_routes = require('./signup_routes');

routes.use(login_routes);
routes.use(signup_routes);

module.exports = routes;