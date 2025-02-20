const express = require('express');
const { getItem, getItems, createItem, updateItem, deleteItem, toggleFavoriteItem } = require('../controllers/tracks.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { customHeader } = require('../middleware/customHeader');
const { authMiddleWare } = require('../middleware/session');
const { checkRol } = require('../middleware/rol');
const router = express.Router();

/**
 * Show all tracks
 * @openapi
 * /tracks:
 *   get:
 *     summary: Show all tracks
 *     tags: 
 *       - Tracks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Show all tracks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/track_nosql'
 *       422:
 *         description: Error in the request
 */
router.get('/', authMiddleWare, getItems)

/**
 * Show a track
 * @openapi
 * /tracks/{id}:
 *   get:
 *     summary: Show a track
 *     tags: 
 *       - Tracks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Show a track
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/track_nosql'
 *       422:
 *         description: Error in the request
 */

router.get('/:id',  authMiddleWare, validatorGetItem, getItem)

/**
 * Create a track
 * @openapi
 * /tracks:
 *   post:
 *     summary: Create a track
 *     tags: 
 *       - Tracks
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/track_nosql'
 *     responses:
 *       201:
 *         description: Track created
 *       422:
 *         description: Error in the request
 */
router.post('/', authMiddleWare, checkRol(['admin']) ,validatorCreateItem ,createItem)

/**
 * Update a track
 * @openapi
 * /tracks/{id}:
 *   put:
 *     summary: Update a track
 *     tags: 
 *       - Tracks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/track_nosql'
 *     responses:
 *       200:
 *         description: Track updated
 *       422:
 *         description: Error in the request
 */
router.put('/:id', authMiddleWare, validatorGetItem, validatorCreateItem, updateItem)

/**
 * Delete a track
 * @openapi
 * /tracks/{id}:
 *   delete:
 *     summary: Delete a track
 *     tags: 
 *       - Tracks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Track deleted
 *       422:
 *         description: Error in the request
 */
router.delete('/:id', authMiddleWare, validatorGetItem, deleteItem)

router.put('/:id/favorite', authMiddleWare, validatorGetItem, toggleFavoriteItem)

module.exports = router;        