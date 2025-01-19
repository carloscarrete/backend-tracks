const express= require('express');
const uploadMiddleware = require('../utils/handleStorage');
const { createItem, getItems, getItem, deleteItem } = require('../controllers/storage.controller');
const { validatorGetItem } = require('../validators/storage');
const router = express.Router();

router.get('/', getItems);
router.get('/:id', validatorGetItem ,getItem);
router.delete('/:id', validatorGetItem ,deleteItem);
router.post('/', uploadMiddleware.single('myfile'), createItem);

module.exports = router;