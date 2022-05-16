const express= require('express');
const router = express.Router();
const {getAll,getOne,create,update,remove} = require('../controllers/tracks');
const {validatorCreate,validatorGetItem} = require('../validator/tracks');



router.get('/', getAll);

router.get('/:id',validatorGetItem, getOne);

router.post('/',validatorCreate, create);

router.put('/:id',validatorGetItem,validatorCreate, update);

router.delete('/:id', remove);

module.exports = router;