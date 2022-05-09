const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema(
    {
        name : {
            type : String,
        },
        album: {
            type : String,
        },
        cover : {
            type : String,
            validate : {
                validator : (req) => {
                    return true;
                },
                msg: "ERROR URL",
            },
        },
        artist : {
            name : {
                type : String,
            },
            nickName : {
                type : String,
            },
            nationality : {
                type : String,
            },
        },
        duration : {
            start : {
                type : Number,
            },
            end : {
                type : Number,
            },
        },
        mediaId : {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

module.exports = mongoose.model("Tracks",trackSchema, "tracks");