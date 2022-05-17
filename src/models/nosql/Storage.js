const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');


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

storageSchema.plugin(mongooseDelete,{overrideMethod: 'all'});

const Storage = mongoose.model('Storage', storageSchema,'storage');

module.exports = Storage;