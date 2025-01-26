const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
    const user = req.user;
    try{
        const data = await tracksModel.findAll();
        res.send({data, user})
    }catch(error){
        handleHttpError(res, error, 403)
    }
}

const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findOne({
            where: {id}
        });
        res.send({data})
    }
    catch(error){
        handleHttpError(res, error, 403)
    }
}

const createItem = async (req, res) => {
    console.log(matchedData(req))
    try{
        const body = matchedData(req);
        //const {body} = req;
        const data = await tracksModel.create(body);
        console.log('casaa', body)
        res.send({data})
    }catch(error){
        console.log(error);
        handleHttpError(res, 'ERR_CREATING_TRACK', 403)
    }
}

const updateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        //const data = await tracksModel.findByIdAndUpdate(id, body, {new: true});
        const data = await tracksModel.update(body, {where: {id}});
        console.log(body)
        res.send({data})
    }catch(error){
        handleHttpError(res, 'ERR_UPDATING_TRACK', 403)
    }
}

const deleteItem = async (req, res) => {
    try{
        const {id} = matchedData(req);
        //const data = await tracksModel.findOneAndDelete({_id: id});
        //const data = await tracksModel.deleteOne({_id: id});
        const data = await tracksModel.delete({_id: id});
        res.send({data})
    }catch(error){
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