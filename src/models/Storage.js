const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storageSchema = new Schema({
    url : {
        type: String
    },
    filename : {
        type: String
    },

},
{
    timestamps: true, // createAt, updateAt
    versionKey: false
}
);

const Storage = mongoose.model('Storage', storageSchema,'storage');

module.exports = Storage;