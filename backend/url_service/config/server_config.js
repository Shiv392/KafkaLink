const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookie_parser = require('cookie-parser');

app.use(cors({
    origin : 'http://localhost:4200',
    credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookie_parser());

const db_initialize = require('../db_init');
require('../redis_init');

const jwt_authentication = require('../middlewars/jwt_authentication');
const url_schema = require('../db_schema/url_schema');
const url_routes = require('../routes/index');

db_initialize();

app.use(jwt_authentication);
app.use(url_routes);

module.exports = app;