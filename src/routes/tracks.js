const express= require('express');
const router = express.Router();
const {getAll,getOne,create,update,remove} = require('../controllers/tracks');
const {validatorCreate} = require('../validator/tracks');


router.get('/', getAll);

router.get('/:id', getOne);

router.post('/',validatorCreate, create);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;