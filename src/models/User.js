const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String
    },
    age : {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    password : {
        type : String
    },
    role: {
        type: ["user","admin"],
        default : "user"
    },
},
{
    timestamps: true, // createAt, updateAt
    versionKey: false
}
);

const User = mongoose.model('User', userSchema,'user');

module.exports = User;