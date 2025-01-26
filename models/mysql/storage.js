const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

const Storages = sequelize.define(
    'Storages',
    {
        url: {
            type: DataTypes.STRING,
        },
        filename: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true
    }
)

module.exports = Storages