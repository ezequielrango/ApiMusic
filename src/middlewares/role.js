const { handleHttpError } = require("../utils/handleErrors");
/**
 * Array con los roles permitidos.
 * @param {*} rol 
 * @returns 
 */


const checkRol = (roles) => (req,res,next) => {
    try {
        const {user} = req;
        const rolesUser = user.role;
        const checkValueRole = roles.some((rolSingle)=> 
            rolesUser.includes(rolSingle)
            );
        if (!checkValueRole) {
            handleHttpError(res,'User NOT permissions', 403);
            return
        }
        next();
    } catch (error) {
        handleHttpError(res,'Error permissions', 403);
    }
};

module.exports = {checkRol};