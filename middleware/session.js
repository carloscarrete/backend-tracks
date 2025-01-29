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

        const query = {
            [propertiesKey.id] : user.id

        }

        req.user = await userModel.findOne(query);

          // Eliminar la propiedad password de req.user (funciona para Mongoose y Sequelize)
          if (req.user && req.user.password) {
            if (req.user.toJSON) {
                // Si el objeto tiene un método toJSON (común en Mongoose y Sequelize)
                req.user = req.user.toJSON();
            }
            delete req.user.password; // Elimina la propiedad password
        }

        next();
    } catch (error) {
        handleHttpError(res, error, 401)
    }
}


module.exports = { authMiddleWare }