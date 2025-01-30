const express = require('express');
const { validatorRegister, validatorLogin } = require('../validators/auth');
const { matchedData } = require('express-validator');
const { encryptPassword } = require('../utils/handlePassword');
const { userModel } = require('../models');
const { generateJWT } = require('../utils/handleJWT');
const { registerController, loginController } = require('../controllers/auth.controller');
const router = express.Router();

/**
 * Register a new user
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/authRegister'
 *     responses:
 *       201:
 *         description: User created
 *       403:
 *         description: Error in the request
 */
router.post('/register', validatorRegister, registerController)

/**
 * Login a user
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/authLogin'
 *     responses:
 *       200:
 *         description: User logged
 *       403:
 *         description: Error in the request
 */
router.post('/login', validatorLogin, loginController)
module.exports = router;