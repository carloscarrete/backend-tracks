const { request } = require('express');
const {  userModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { verifyJWT } = require('../utils/handleJWT');
const getProperties = require('../utils/handlePropertiesEngine');
const propertiesKey = getProperties();

const authMiddleWare =  async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, 'NOT_AUTHORIZED', 401);
            return;
        }

        const token = req.headers.authorization.split(' ').pop();
        const user = verifyJWT(token);

        if(!user){
            handleHttpError(res, 'NOT_PAYLOAD', 401);
            return;
        }

       // console.log('PropertiesKey:', propertiesKey);
       // console.log('Userx:', user);

        const query = {
            [propertiesKey.id] : user.id

        }

        req.user = await userModel.findOne(query);
        const nnn = await userModel.findOne({_id: '679480b1ee62f11743a65453'});
       // console.log('nnn:', nnn);
        next();
    } catch (error) {
        handleHttpError(res, error, 401)
    }
}


module.exports = { authMiddleWare }