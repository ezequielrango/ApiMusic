const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const {create} = require('../controllers/storage');


router.post('/', uploadMiddleware.single('file'), create);

module.exports = router;