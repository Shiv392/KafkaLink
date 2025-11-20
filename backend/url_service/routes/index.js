const express = require('express');
const url_routes = express.Router();
const get_url_routes = require('./get_url_routes');
const add_url_routes = require('./add_url_routes');
const edit_url_routes = require('./edit_url_routes');
const delete_url_routes = require('./delete_url_routes');

url_routes.use('/app', get_url_routes);
url_routes.use('/app', edit_url_routes);
url_routes.use('/app', add_url_routes);
url_routes.use('/app', delete_url_routes)

module.exports = url_routes;