const express = require('express');
const router = express.Router();
const {validatorRegister,validatorLogin} = require('../validator/auth');
const {register,login} = require('../controllers/auth');


router.post('/register',validatorRegister,register);
router.post('/login',validatorLogin,login);

module.exports = router;
