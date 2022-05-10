const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');

router.post('/', uploadMiddleware.single('file'), (req, res) => {
    console.log('Image Added')
    return res.send(req.file)
})

module.exports = router;