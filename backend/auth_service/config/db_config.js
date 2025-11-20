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
            min : 0, // Minimum number of connections in the pool
            max : 5,  // Maximium number of connectin in the pool
            acquire : 30000, // Maximum time to acquire connection 
            idle : 10000 //Maximum time a connnection can be idle before being released 
        },
        define : {
            timestamps : true,
            underscored : true
        }
    }
)

module.exports = sequelize;