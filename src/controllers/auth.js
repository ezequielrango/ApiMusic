const { matchedData, body } = require("express-validator")
const  {encrypt,compare} = require('../utils/handlePassword');
const {usersModel} = require('../models');

const register = async (req , res) => {
    req = matchedData(req);
    const passwordHash = await encrypt(req.password);
    const body = {...req, password: passwordHash };
    const data = await usersModel.create(body);
    data.set("password",undefined,{strict: false});
    res.send({data});
};

module.exports = { register };