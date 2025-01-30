const express= require('express');
const uploadMiddleware = require('../utils/handleStorage');
const { createItem, getItems, getItem, deleteItem } = require('../controllers/storage.controller');
const { validatorGetItem } = require('../validators/storage');
const router = express.Router();

/**
 * Show all tracks
 * @openapi
 * /storage:
 *   get:
 *     summary: Show all tracks
 *     tags: 
 *       - Storage
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
 *                 $ref: '#/components/schemas/storage'
 *       422:
 *         description: Error in the request
 */
router.get('/', getItems);

/**
 * Show a track
 * @openapi
 * /storage/{id}:
 *   get:
 *     summary: Show a track
 *     tags: 
 *       - Storage
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
 *               $ref: '#/components/schemas/storage'
 *       422:
 *         description: Error in the request
 */
router.get('/:id', validatorGetItem ,getItem);

/**
 * Delete a track
 * @openapi
 * /storage/{id}:
 *   delete:
 *     summary: Delete a track
 *     tags: 
 *       - Storage
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
router.delete('/:id', validatorGetItem ,deleteItem);

/**
 * Create a track
 * @openapi
 * /storage:
 *   post:
 *     summary: Create a track
 *     tags: 
 *       - Storage
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               myfile:
 *                 type: string
 *                 format: binary
 *     responses: 
 *       201:
 *         description: Track created
 *       422:
 *         description: Error in the request
 */
router.post('/', uploadMiddleware.single('myfile'), createItem);

module.exports = router;