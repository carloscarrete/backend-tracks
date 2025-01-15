const mongoose = require('mongoose');;

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
            required: true
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

module.exports = mongoose.model('Users', UserSchema);

