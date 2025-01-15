const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, filename, cb) {
        cb(null, `${__dirname}/../storage/`);
    },
    filename: function (req, filename, cb) {
        cb(null, `${Date.now()}-${filename.originalname}`)
    }
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;