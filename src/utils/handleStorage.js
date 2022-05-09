const multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        const pathStorage = `${__dirname}/src/storage`;
        cb(null, pathStorage);
    },
    fileName : function(req,file,cb) {
        const extension = file.originalname.split('.').pop();
        const fileName = `file-${Date.now()}.${extension}`;
        cb(null, fileName);
    },
});

const uploadMiddleware = storage({ storage });