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
        handleHttpError(res,'Error register user');
    }
};

const login = async (req,res) =>{
    try {
        req = matchedData(req);
        const {email,password} = req;
        const user = await usersModel.findOne({email : email}).select('password name role email')
        if (!user) {
            handleHttpError(res,'User not exists',404);
            return;
        };
        const hashPassword =  user.password;
        console.log(hashPassword);
        const check = await compare(password,hashPassword);
        if (!check) {
            handleHttpError(res,'Password incorrect',401);
            return
        };
        user.set('password', undefined,{strict:false});
        const data = {
            token : await tokenSign(user),
            user
        };

        res.send({data})
    } catch (error) {
        handleHttpError(res,'Error login user');
    }
}

module.exports = { register, login };