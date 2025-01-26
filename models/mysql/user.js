const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

const User = sequelize.define(
    "Users",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(['user', 'admin']),
            allowNull: false,
            defaultValue: 'user'
        }
    },
    {
        timestamps: true
    }
)

module.exports = User