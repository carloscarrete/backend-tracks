const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');


const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
           // select: false No se mostrará el password
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

/* 
role: {
            type: ['admin', 'user'],
            default: 'user'
        }
*/

UserSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });
module.exports = mongoose.model('Users', UserSchema);

