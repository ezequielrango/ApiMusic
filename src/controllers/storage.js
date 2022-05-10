const {storageModel} = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;


const getAll = async (req,res) => {
    const data = await storageModel.find({})
    res.send({data});
};
const getOne = (req,res) => {};

const create = async (req,res) => {
    const {body,file} = req;
    const data = await storageModel.create(body);
    const fileData = {
        filename : file.filename,
        url : `PUBLIC_URL/${file.filename}` ,
        data
    }
    console.log(fileData);
    res.send({file})
};
const update = (req,res) => {};
const remove = (req,res) => {};
module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}