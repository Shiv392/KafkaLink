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

const sequelize = require('./db_config');
const user_schema = require('../db_schema/user_schema');

(async ()=>{
try{
await sequelize.sync({alter : true});
console.log('all model sync with db---->');
}
catch(err){
console.log('error while db sync--->', err);
}
}) ();


module.exports = app;