const {storageModel} = require('../models');
const {handleHttpError} = require('../utils/handleErrors');
const {matchedData} = require('express-validator');
const fs = require('fs');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH =`${__dirname}/../storage`;

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
        url : `${PUBLIC_URL}/${file.filename}` ,
    }
    const data = await storageModel.create(fileData);
    res.send({data})
};


const remove = async  (req,res) => {
    try {
        req = matchedData(req); // validate- filter id
        const {id} = req;
        const dataFile = await storageModel.findById(id);
        // await storageModel.deleteOne(id); // elimiancion permanente de db
        await storageModel.delete({_id:id}); // soft delete
        const {filename} = dataFile;
        const filePath =`${MEDIA_PATH}/${filename}`;


        // fs.unlinkSync(filePath);  comentado se mantiene media, sino se elimina
        const data = {
            filePath,
            deleted : 1
        };

        res.send({data});
    } catch (err) {
        handleHttpError(res,'The requested resources were not obtained', 404);
    };
};

module.exports = {
    getAll,
    getOne,
    create,
    remove
}