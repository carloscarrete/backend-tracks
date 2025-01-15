const { storagesModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req, res) => {
    const data = await storagesModel.find({});
    res.send({data})
}

const getItem = (req, res) => {
    res.send({data: ['hola', 'mundo']})
}

const createItem = async (req, res) => {
    const {body, file} = req;
    //console.log(file)
    const fileData = {
        url: `${PUBLIC_URL}/${file.filename}`,
        filename: file.filename
    }
    const data = await storagesModel.create(fileData);
    res.send({data})
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