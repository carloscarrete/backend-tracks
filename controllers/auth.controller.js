const { matchedData } = require("express-validator");
const { encryptPassword, comparePassword } = require("../utils/handlePassword");
const { userModel } = require("../models");
const { generateJWT } = require("../utils/handleJWT");
const { handleHttpError } = require("../utils/handleError");

/**
 * Register a new user
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @returns {Promise<void>}
 */
const registerController = async (req, res) => {
    try{
        req = matchedData(req);
        const password = await encryptPassword(req.password);
        const body = { ...req, password }
        const dataUser = await userModel.create(body);
        dataUser.set('password', undefined, { strict: false });
        const data = {
            token: generateJWT(dataUser),
            user: dataUser
        }
        res.send({ data })
    }catch(error){
        console.log(error)
        handleHttpError(res, 'ERR_REGISTER', 403)
    }
}

const loginController = async (req, res) => {
    try{
        req = matchedData(req);
        const user = await userModel.findOne({ email: req.email })//.select('password name role email'); modelo de mongo
        if(!user){
            handleHttpError(res, 'USER_NOT_FOUND', 404);
            return;
        }

        const hashPassword = user.password;
        const check = await comparePassword(req.password, hashPassword);
        if(!check){
            handleHttpError(res, 'PASSWORD_INVALID', 401);
            return;
        }

        user.set('password', undefined, { strict: false });
        //user.set('password', undefined, { strict: false }); tambien de mongo
        const data = {
            token: generateJWT(user),
            user
        }

        res.send({ data })
        
    }catch(error){
        handleHttpError(res, 'ERR_LOGIN', 403)
    }
}


module.exports = { registerController, loginController }