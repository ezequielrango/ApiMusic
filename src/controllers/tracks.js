const {tracksModel} = require('../models');


const getAll = async (req,res) => {
    const data = await tracksModel.find({})
    res.send({data});
};
const getOne = (req,res) => {};

const create = async (req,res) => {
    const {body} = req;
    const data = await tracksModel.create(body);
    console.log(body);
    res.send({data})
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