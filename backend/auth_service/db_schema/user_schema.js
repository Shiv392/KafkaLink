const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config');

const user_schema = sequelize.define('user', { //here user will used as reference foreignt key 
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // unique: true,
        validate: {
            isEmail: true
        }
    },
    user_password: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
},
    {
        tableName: 'user',
        timestamps: true,
        indexes : [
            {
                unique : true, fields : ['user_email'], name : 'user_email_index'
            }
        ]
    }
);

module.exports = user_schema;