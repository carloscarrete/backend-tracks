const express = require('express');
const { validatorRegister, validatorLogin } = require('../validators/auth');
const { matchedData } = require('express-validator');
const { encryptPassword } = require('../utils/handlePassword');
const { userModel } = require('../models');
const router = express.Router();


router.post('/register', validatorRegister, async (req, res) => {
    req = matchedData(req);
    const password = await encryptPassword(req.password);
    const body = { ...req, password }
    const data = await userModel.create(body);
    data.set('password', undefined, {strict: false});
    res.send({data})
})

router.post('/login', validatorLogin, (req, res) => {

})
module.exports = router;