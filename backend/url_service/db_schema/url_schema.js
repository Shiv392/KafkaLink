const sequelize  = require('../config/db_config');
const {DataTypes} = require('sequelize')

const url_schema = sequelize.define('url',{
    url_id : {
        type : DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    short_code : {
        type : DataTypes.STRING(15),
        allowNull : false,
        unique : true
    },
    url : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    url_password : {
        type : DataTypes.STRING,
        allowNull : true
    },
    user_id : {
        type : DataTypes.INTEGER,
        allowNull : true,
        references : {
            model : 'user', //schema name of the user_schema 
            key : 'user_id'
        },
        onDelete : 'SET NULL'
    }
},{
    tableName : 'url',
    timestamps : true,
    indexes : [
        {
            unique : true, fields : ['short_code']
        },
        {
            fields : ['user_id']
        }
    ]
});


module.exports = url_schema;