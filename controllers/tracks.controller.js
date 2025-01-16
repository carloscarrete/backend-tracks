const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
    try{
        const data = await tracksModel.find({});
        res.send({data})
    }catch(error){
        handleHttpError(res, error, 403)
    }
}

const getItem = (req, res) => {
    res.send({data: ['hola', 'mundo']})
}

const createItem = async (req, res) => {
    try{
        //const {body} = req;
        const body = matchedData(req);
        const data = await tracksModel.create(body);
        res.send({data})
    }catch(error){
        handleHttpError(res, 'ERR_CREATING_TRACK', 403)
    }
}

const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}