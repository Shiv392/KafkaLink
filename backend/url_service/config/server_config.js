const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.get('/url', (req, res)=>{
    return res.status(200).send(`<h1>This is URL Page </h1>`)
})

module.exports = app;