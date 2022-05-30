const { handleHttpError } = require("../utils/handleErrors");
const {verifyToken} = require('../utils/handlerJwt');
const {getUserByToken} = require('../utils/handleTokenUser');


const auth = async (req, res ,next) => {
    try {
        const auth = req.headers.authorization;
         if (!auth) {
            handleHttpError(res,'No token provided',401);
            return;
         }
         const token = auth.split(' ').pop();
         const dataToken = await verifyToken(token);

         if (!dataToken._id) {
            handleHttpError(res,'Error ID Token',401);
            return;
         }
         const user = await getUserByToken(dataToken._id);
         req.user = user;
         next();
    } catch (error) {
        handleHttpError(res,'Not session',401)
    };
};

module.exports = {auth};