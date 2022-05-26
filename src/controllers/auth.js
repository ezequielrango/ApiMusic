const { matchedData, body } = require("express-validator")
const  {encrypt,compare} = require('../utils/handlePassword');
const {usersModel} = require('../models');
const {tokenSign} = require('../utils/handlerJwt');
const { handleHttpError } = require("../utils/handleErrors");

const register = async (req , res) => {
    try {
        req = matchedData(req);
        const passwordHash = await encrypt(req.password);
        const body = {...req, password: passwordHash };
        const dataUser = await usersModel.create(body);
        dataUser.set("password",undefined,{strict: false}); //seteo el modelo para que no retorne el password encriptado, porque el metodo no permite realizar filtrado de atributos
        
        const data = {
            token : await tokenSign(dataUser),
            user : dataUser
        };
    
        res.send({data});
        
    } catch (error) {
        handleHttpError(res,'Internal Server Error', 500);
    }
};

module.exports = { register };