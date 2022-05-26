const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorRegister = [
    check("name").exists().notEmpty().isLength({min:4, max:35}).withMessage('min 4 max 35'),
    check("age").exists().notEmpty().isNumeric().withMessage('only numbers'),
    check("email").exists().notEmpty().isEmail().withMessage('empty or not is email'),
    check("password").exists().notEmpty().isLength({min:4, max:15}).withMessage('min 4 max 15'),

    (req,res,next) => {
      return  validateResults(req,res,next)
    },
    
];
const validatorLogin = [

    check("email").exists().notEmpty().isEmail().withMessage('empty or not is email'),
    check("password").exists().notEmpty().isLength({min:4, max:15}).withMessage('min 4 max 15'),

]

module.exports = {validatorRegister,validatorLogin};