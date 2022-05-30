const express= require('express');
const router = express.Router();
const {getAll,getOne,create,update,remove} = require('../controllers/tracks');
const {validatorCreate,validatorGetItem} = require('../validator/tracks');
const {auth} = require('../middlewares/session');
const {checkRol} = require('../middlewares/role');

router.get('/',auth, getAll);

router.get('/:id',auth,validatorGetItem, getOne);

router.post('/',auth,checkRol(['admin']),validatorCreate, create);

router.put('/:id',auth,checkRol,validatorGetItem,validatorCreate, update);

router.delete('/:id',auth,checkRol,validatorGetItem, remove);

module.exports = router;