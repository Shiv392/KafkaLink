const sequelize = require('./config/db_config');

const db_initialize = async()=>{
try{
await sequelize.sync({sync : true});
}
catch(err){
console.log('db model sync error ', err);
}
}
module.exports = db_initialize;