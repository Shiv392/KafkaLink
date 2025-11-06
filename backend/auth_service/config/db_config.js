const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : 'mysql',
        logging : false,
        pool : {
            min : 0,
            max : 5, 
            acquire : 30000,
            idle : 10000
        },
        define : {
            timestamps : true,
            underscored : true
        }
    }
)

const test_connection = async()=>{
    try{
     await sequelize.authenticate();
     console.log('db connection successfull');
    }
    catch(err){
        console.log('error occured while auth service db connection', err);
    }
}

test_connection();


module.exports = sequelize;