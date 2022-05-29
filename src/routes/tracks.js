const express= require('express');
const router = express.Router();
const {getAll,getOne,create,update,remove} = require('../controllers/tracks');
const {validatorCreate,validatorGetItem} = require('../validator/tracks');
const {auth} = require('../middlewares/session');


router.get('/',auth, getAll);

router.get('/:id',validatorGetItem, getOne);

router.post('/',validatorCreate, create);

router.put('/:id',validatorGetItem,validatorCreate, update);

router.delete('/:id',validatorGetItem, remove);

module.exports = router;