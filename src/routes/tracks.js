const express= require('express');
const router = express.Router();
const tracksController= require('../controllers/tracks');
const {validatorCreate,validatorGetItem} = require('../validator/tracks');
const {auth} = require('../middlewares/session');
const {checkRol} = require('../middlewares/role');

router.get('/',auth, tracksController.getAll);

router.get('/:id',auth,validatorGetItem, tracksController.getOne);

// router.post('/',auth,checkRol(['admin']),validatorCreate, create);

// router.put('/:id',auth,checkRol(['admin']),validatorGetItem,validatorCreate, update);

// router.delete('/:id',auth,checkRol(['admin']),validatorGetItem, remove);

module.exports = router;