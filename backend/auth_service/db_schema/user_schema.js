const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config');

const user_schema = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    user_name: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING(),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    user_password: {
        type: DataTypes.STRING(),
        allowNull: true
    },
},
    {
        tableName: 'user',
        timestamps: true
    }
);

module.exports = user_schema;