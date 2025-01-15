const mongoose = require('mongoose');;

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Storages', StorageSchema);