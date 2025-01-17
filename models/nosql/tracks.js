const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TracksSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        album: {
            type: String,
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => { return true },
                message: 'ERROR_URL'
            }
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            }
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            }
        },
        mediaId: {
            type: mongoose.Schema.Types.ObjectId,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

TracksSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });
module.exports = mongoose.model('Tracks', TracksSchema);

/* 
    "name": "Carlos",
    "album": "Album 1",
    "cover": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "artist": {
    "name": "Carlos",
    "nickname": "carretekrt",
    "nationality": "Mexican"
    },
    "duration": {
    "start": 0,
    "end": 0
    },
    "mediaId": "62a2a2a2a2a2a2a2a2a2a2a2"

*/