const jwt = require('jsonwebtoken');
const { usersModel } = require('../models');
const JWT_SECRET = process.env.JWT_SECRET;
const {handleHttpError} = require('../utils/handleErrors');


const tokenSign = async (user) => {

    const sign = jwt.sign(
        {
            _id: user.id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: '2h'
        }
    );
    return sign;   
};

const verifyToken = async (tokenJwt) => {
    try {
        const token = jwt.verify(tokenJwt,JWT_SECRET)
        if (!token) {
            handleHttpError(res, 'Token invalid or expired', 401)
        }
        return token;
    } catch (e) {
        handleHttpError(res, 'Internal Server Error', 500);
    }

};

module.exports={tokenSign,verifyToken };