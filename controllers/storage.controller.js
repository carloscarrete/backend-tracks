const { storagesModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const fs = require('fs');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
    try {
        const data = await storagesModel.findAllData();
        res.send({ data })
    } catch (error) {
        console.log(error)
        handleHttpError(res, 'ERR_GETTING_TRACK', 403)
    }
}

const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await storagesModel.findOneData(id);
        res.send({ data })
    } catch (error) {
        console.log(error)
        handleHttpError(res, 'ERR_GETTING_TRACK', 403)
    }
}

const createItem = async (req, res) => {
    try {
        const { file } = req;
        const fileData = {
            url: `${PUBLIC_URL}/${file.filename}`,
            filename: file.filename
        }
        const data = await storagesModel.create(fileData);
        res.send({ data })
    }catch(error){
        console.log(error)
        handleHttpError(res, 'ERR_CREATING_TRACK', 403)
    }
}

const updateItem = async (req, res) => {

}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Buscar el registro primero
        const data = await storagesModel.findOneData(id);
        
        if (!data) {
            return handleHttpError(res, 'FILE_NOT_FOUND', 404);
        }

        // Eliminar el archivo físico
        const filePath = `${MEDIA_PATH}/${data.filename}`;
        fs.unlinkSync(filePath);
        console.log(filePath);
        // Eliminar el registro
        await storagesModel.deleteOneData(id);

        // Eliminar el registro de la base de datos
        //await data.destroy(); // Equivalente a deleteOne en Mongoose

        res.send({ 
            filePath,
            deleted: true
        });
        
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERR_DELETING_FILE', 403);
    }
};

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}