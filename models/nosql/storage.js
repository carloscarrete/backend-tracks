const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');


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

StorageSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });
module.exports = mongoose.model('Storages', StorageSchema);