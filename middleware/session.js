const { request } = require('express');
const {  userModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { verifyJWT } = require('../utils/handleJWT');
const authMiddleWare =  async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, 'NOT_AUTHORIZED', 401);
            return;
        }

        const token = req.headers.authorization.split(' ').pop();
        const user = verifyJWT(token);
        if(!user._id){
            handleHttpError(res, 'ERR_ID_TOKEN', 401);
            return;
        }

        req.user = await userModel.findById(user._id);
        
        next();
    } catch (error) {
        handleHttpError(res, error, 401)
    }
}


module.exports = { authMiddleWare }