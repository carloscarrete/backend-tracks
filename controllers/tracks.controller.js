const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const ENGINE_DB = process.env.ENGINE_DB;

const getItems = async (req, res) => {
    const user = req.user;
    try {
        const data = await tracksModel.findAllData();
        res.send({ data, user })
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERR_GETTING_TRACK', 403)
    }
}

const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.findOneData(id);
        res.send({ data })
    }
    catch (error) {
        console.log(error);
        handleHttpError(res, 'ERR_GETTING_TRACK', 403)
    }
}

const createItem = async (req, res) => {
    console.log(matchedData(req))
    try {
        const body = matchedData(req);
        //const {body} = req;
        const data = await tracksModel.create(body);
        console.log('casaa', body)
        res.status(201)
        res.send({ data })
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERR_CREATING_TRACK', 403)
    }
}

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const track = await tracksModel.findOneData(id);
        if (!track) {
            return handleHttpError(res, 'TRACK_NOT_FOUND', 404);
        }
        const data = await tracksModel.updateOneData(id, body);
        //const data = await tracksModel.findByIdAndUpdate(id, body, {new: true});
        console.log(body)
        res.send({ data })
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERR_UPDATING_TRACK', 403)
    }
}


/* const updateItem = async (req, res) => {
    try {
      req = matchedData(req);
      const { id, ...body } = req;
  
      const data = await tracksModel.findOneAndUpdate(id, body, {
        new: true,
      });
      res.send({ data });
    } catch (e) {
      console.log(e);
      handleHttpError(res, e);
    }
  }; */

/* const deleteItem = async (req, res) => {
    try{
        const {id} = matchedData(req);
        //const data = await tracksModel.findOneAndDelete({_id: id});
        //const data = await tracksModel.deleteOne({_id: id});
        const data = await tracksModel.delete({_id: id});
        res.send({data})
    }catch(error){
        handleHttpError(res, 'ERR_DELETING_TRACK', 403)
    }
} */

const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);

        // Usando el método personalizado del modelo
        const track = await tracksModel.findOneData(id);
        if (!track) {
            return handleHttpError(res, 'TRACK_NOT_FOUND', 404);
        }
        await tracksModel.deleteOneData(id);

        res.send({ data: track });
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERR_DELETING_TRACK', 403);
    }
};

const toggleFavoriteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const track = await tracksModel.findOneData(id);
        if (!track) {
            return handleHttpError(res, 'TRACK_NOT_FOUND', 404);
        }
        const updateTrack = await tracksModel.updateOneData(id, { favorite: !track[0].favorite });
        res.status(200).send({ data: updateTrack })
    } catch (error) {
        handleHttpError(res, 'ERR_TOGGLE_FAVORITE_TRACK', 403)
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    toggleFavoriteItem
}