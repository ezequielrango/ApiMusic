const { matchedData } = require('express-validator');
const {tracksModel} = require('../models');
const {handleHttpError} = require('../utils/handleErrors');



const getAll = async (req,res) => {
    try {
        const data = await tracksModel.find({})
        res.send({data});
        
    } catch (err) {
        handleHttpError(res,'The requested resources were not obtained')
    }
};


const getOne = (req,res) => {};


const create = async (req,res) => {
    try {
        const body = matchedData(req); // Function cleaner req.body data
        const data = await tracksModel.create(body);
        console.log(body);
        res.send({data})
        
    } catch (err) {
        handleHttpError(res,'The resource could not be created');
    }
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