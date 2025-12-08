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
            idle : 10000,
            acquire : 30000
        },
        define : {
            timestamps : true,
            underscored : true
        }
    }
);

module.exports = sequelize;