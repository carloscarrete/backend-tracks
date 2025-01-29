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

StorageSchema.statics.findAllData = function () {
    return this.find({})
}

StorageSchema.statics.findOneData = function (id) {
    return this.findById(id)
}

StorageSchema.statics.deleteOneData = function (id) {
    return this.findByIdAndDelete(id)
}

StorageSchema.statics.deleteOneData = function (id) {
    return this.delete({
        _id: new mongoose.Types.ObjectId(id)
    })
}

StorageSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });
module.exports = mongoose.model('Storages', StorageSchema);