const express= require('express');
const router = express.Router();
const {getAll,getOne,create,update,remove} = require('../controllers/tracks');
const {validatorCreate,validatorGetItem} = require('../validator/tracks');
const {auth} = require('../middlewares/session');


router.get('/',auth, getAll);

router.get('/:id',auth,validatorGetItem, getOne);

router.post('/',auth,validatorCreate, create);

router.put('/:id',auth,validatorGetItem,validatorCreate, update);

router.delete('/:id',auth,validatorGetItem, remove);

module.exports = router;