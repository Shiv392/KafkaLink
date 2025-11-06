const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const cookie_parser = require('cookie-parser');
dotenv.config();

app.use(cors());
app.use(express.json()); //for json request 
app.use(express.urlencoded({extended : true})); //for form submission 
app.use(cookie_parser()); //allowing to access cookie data from the request 

const db_initialize = require('../db_init');
const user_schema = require('../db_schema/user_schema');

const routes = require('../routes/index');
app.use(routes);


db_initialize();

module.exports = app;