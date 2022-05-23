const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { getAll,getOne,create,remove} = require('../controllers/storage');
const {validatorGetItem} = require('../validator/storage');


router.get('/',getAll);

router.get('/:id',validatorGetItem,getOne);

router.post('/', uploadMiddleware.single('file'), create);

router.delete('/:id',validatorGetItem, remove);

module.exports = router;