const express = require('express');
const { getItem, getItems, createItem, updateItem, deleteItem } = require('../controllers/tracks.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { customHeader } = require('../middleware/customHeader');
const router = express.Router();

router.get('/', getItems)
router.get('/:id',  validatorGetItem, getItem)
router.post('/', validatorCreateItem, customHeader ,createItem)
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem)
router.delete('/:id', validatorGetItem, deleteItem)
module.exports = router;