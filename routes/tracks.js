const express = require('express');
const { getItem, getItems, createItem } = require('../controllers/tracks.controller');
const { validatorCreateItem } = require('../validators/tracks');
const router = express.Router();

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', validatorCreateItem ,createItem)

module.exports = router;