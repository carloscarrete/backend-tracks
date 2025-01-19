const { check } = require("express-validator");
const { validateResults } = require("../utils/handleValidator");
const { encryptPassword, comparePassword } = require("../utils/handlePassword");

const validatorRegister = [
    check('name').exists().notEmpty().isLength({min: 3, max:150}),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min: 3, max:60}),
    validateResults
]

const validatorLogin = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min: 3, max:60}),
    validateResults
]

module.exports = { validatorRegister, validatorLogin }  ; 