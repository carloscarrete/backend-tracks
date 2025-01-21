const express = require('express');
const { getItem, getItems, createItem, updateItem, deleteItem } = require('../controllers/tracks.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { customHeader } = require('../middleware/customHeader');
const { authMiddleWare } = require('../middleware/session');
const { checkRol } = require('../middleware/rol');
const router = express.Router();

router.get('/', authMiddleWare, getItems)
router.get('/:id',  authMiddleWare, validatorGetItem, getItem)
router.post('/', authMiddleWare, checkRol(['admin']) ,validatorCreateItem ,createItem)
router.put('/:id', authMiddleWare, validatorGetItem, validatorCreateItem, updateItem)
router.delete('/:id', authMiddleWare, validatorGetItem, deleteItem)
module.exports = router;