const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const {create,getAll} = require('../controllers/storage');

router.get('/',getAll);

router.post('/', uploadMiddleware.single('file'), create);

module.exports = router;