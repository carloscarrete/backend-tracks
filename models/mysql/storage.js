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

Storages.findAllData = function () {
    return Storages.findAll()
}

Storages.findOneData = function (id) {
    return Storages.findByPk(id)
}

Storages.deleteOneData = function (id) {
    return Storages.destroy({
        where: {
            id
        }
    })
}

module.exports = Storages