const { storagesModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const fs = require('fs');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
    try {
        const data = await storagesModel.find({});
        res.send({ data })
    } catch (error) {
        handleHttpError(res, error, 403)
    }
}

const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await storagesModel.findById(id);
        res.send({ data })
    } catch (error) {
        handleHttpError(res, error, 403)
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
        handleHttpError(res, 'ERR_CREATING_TRACK', 403)
    }
}

const updateItem = async (req, res) => {

}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await storagesModel.findById({_id: id});
        const filePath = `${MEDIA_PATH}/${data.filename}`;
        fs.unlinkSync(filePath);
        console.log(filePath)
        //await storagesModel.delete({_id: id});
        await storagesModel.deleteOne({_id: id}); //No es necesario restaurar
        res.send({ 
            filePath,
            deleted: true
         })
    } catch (error) {
        handleHttpError(res, 'ERR_DELETING_TRACK', 403)
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}