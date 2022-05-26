const { matchedData, body } = require("express-validator")
const  {encrypt,compare} = require('../utils/handlePassword');
const {usersModel} = require('../models');

const register = async (req , res) => {
    req = matchedData(req);
    const passwordHash = await encrypt(req.password);
    const body = {...req, password: passwordHash };
    const data = await usersModel.create(body);
    data.set("password",undefined,{strict: false}); //seteo el modelo para que no retorne el password encriptado, porque el metodo no permite realizar filtrado de atributos
    res.send({data});
};

module.exports = { register };