const { matchedData } = require('express-validator');
const {tracksModel} = require('../models');
const {handleHttpError} = require('../utils/handleErrors');



const getAll = async (req,res) => {
    try {
        const data = await tracksModel.find({})
        res.send({data});
        
    } catch (err) {
        handleHttpError(res,'The requested resources were not obtained');
    };
};


const getOne = async (req,res) => {
    try {
        req = matchedData(req); // validate- filter id
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data});
        
    } catch (err) {
        handleHttpError(res,'The requested resources were not obtained', 404);
    };
};


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


const update = async (req,res) => {
    try {
     
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(id.body);
        console.log(body);
        res.send({data})
        
    } catch (err) {
        handleHttpError(res,'Error update');
    }
};


const remove = (req,res) => {};
module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}