const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");
const Storage = require("./storage");

const Tracks = sequelize.define(
    "Tracks",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        album: {
            type: DataTypes.STRING,
        },
        cover: {
            type: DataTypes.STRING,
        },
        artist_name: {
            type: DataTypes.STRING,
        },
        artist_nickname: {
            type: DataTypes.STRING,
        },
        artist_nationality: {
            type: DataTypes.STRING,
        },
        duration_start: {
            type: DataTypes.INTEGER,
        },
        duration_end: {
            type: DataTypes.INTEGER,
        },
        mediaId: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: true
    }
)

Tracks.belongsTo(Storage, {
    foreignKey: 'mediaId',
    as: 'audio'
})


Tracks.findAllData = function () {
    return Tracks.findAll({
        //include: Storage
        include: 'audio'
    })
}

Tracks.findOneData = function (id) {
    return Tracks.findByPk(id, {  //or findOne??
        //include: Storage
        include: 'audio'
    })
}

Tracks.deleteOneData = function (id) {
    return Tracks.destroy({
        where: {
            id
        }
    })
}

Tracks.updateOneData = function (id, body) {
    return Tracks.update(body, {
        where: {
            id
        }
    })
}


module.exports = Tracks