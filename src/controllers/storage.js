const {storageModel} = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;
const {handleHttpError} = require('../utils/handleErrors');


const getAll = async (req,res) => {
    try {
        const data = await storageModel.find({})
        res.send({data});
    } catch (err) {
        handleHttpError(res,'The requested resources were not obtained')
    }
};
const getOne = async (req,res) => {
    try {
        req = matchedData(req); // validate- filter id
        const {id} = req;
        const data = await storageModel.findById(id);
        res.send({data});
        
    } catch (err) {
        handleHttpError(res,'The requested resources were not obtained', 404);
    };
};

const create = async (req,res) => {
    const {file} = req;
    const fileData = {
        filename : file.filename,
        url : `PUBLIC_URL/${file.filename}` ,
    }
    const data = await storageModel.create(fileData);
    res.send({data})
};
const update =  async (req,res) => {};
const remove = async  (req,res) => {};
module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}