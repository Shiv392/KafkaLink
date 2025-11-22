const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookie_parser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(cookie_parser());

const db_initialize = require('../db_init');
const url_schema = require('../db_schema/url_schema');
const url_routes = require('../routes/index');

db_initialize();

app.use(url_routes);

app.get('/url', (req, res)=>{
    return res.status(200).send(`<h1>This is URL Page </h1>`)
})

module.exports = app;