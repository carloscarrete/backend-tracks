const express = require('express');
const { validatorRegister, validatorLogin } = require('../validators/auth');
const { matchedData } = require('express-validator');
const { encryptPassword } = require('../utils/handlePassword');
const { userModel } = require('../models');
const { generateJWT } = require('../utils/handleJWT');
const { registerController, loginController } = require('../controllers/auth.controller');
const router = express.Router();


router.post('/register', validatorRegister, registerController)

router.post('/login', validatorLogin, loginController)
module.exports = router;