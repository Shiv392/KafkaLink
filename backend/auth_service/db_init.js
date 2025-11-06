const sequelize = require('./config/db_config');


//syncing models with the db -------------->
const db_initialize = async()=>{
try{
await sequelize.sync({alter : true});
console.log('all model sync with db---->');
}
catch(err){
console.log('error while db sync--->', err);
}
}

module.exports = db_initialize;