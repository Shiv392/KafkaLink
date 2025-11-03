const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json()); //for json request 
app.use(express.urlencoded({extended : true})); //for form submission 


module.exports = app;