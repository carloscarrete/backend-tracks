const express= require('express');
const uploadMiddleware = require('../utils/handleStorage');
const { createItem } = require('../controllers/storage.controller');
const router = express.Router();

router.post('/', uploadMiddleware.single('myfile'), createItem);

module.exports = router;