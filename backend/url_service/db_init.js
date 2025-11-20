const sequelize = require('./config/db_config');

const db_initialize = async()=>{
try{
await sequelize.sync({alter : true});
console.log('db model sync done ✌️');
}
catch(err){
console.log('db model sync error ', err);
}
}
module.exports = db_initialize;