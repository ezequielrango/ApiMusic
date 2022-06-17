const { matchedData } = require('express-validator');
// const {handleHttpError} = require('../utils/handleErrors');
const tracksService = require('../services/tracks');
const {handleHttpError} = require('../utils/handleErrors');
const  {RequestAuthor} = require('../utils/handleRequestUser');


module.exports = {

    getAll: async (req, res) => {
            const tracks = await tracksService.getAll(req, res);
            return res.status(tracks.status).json({tracks});
      },
      
    getOne: async (req, res) => {
            req = matchedData(req); // validate- filter id
            const user = await RequestAuthor(req); //REVISAR undefined
            console.log(user); // REVISAR undefined
            const {id} = req;
            const track = await tracksService.getOne(id);
            return res.status(track.status).json(track);
      },
    create: async (req,res) => {
            const body = matchedData(req);   
            const newTrack = await tracksService.create(body);

            return res.status(newTrack.status).json(newTrack);
    },
}  


// const getAll = async (req,res) => {
//     try {
//         const user = await req.user;
//         const data = await tracksModel.find({})  
//         res.send({data,user});
        
//     } catch (err) {
//         handleHttpError(res,'The requested resources were not obtained');
//     };
// };


// const getOne = async (req,res) => {
//     try {
//         req = matchedData(req); // validate- filter id
//         const {id} = req;
//         const data = await tracksModel.findById(id);
//         res.send({data});
        
//     } catch (err) {
//         handleHttpError(res,'The requested resources were not obtained', 404);
//     };
// };


const create = async (req,res) => {
    try {
        const user = await req.user;
        const body = matchedData(req); // Function cleaner req.body data
        const data = await tracksModel.create(body);
        res.send({data,user})
        
    } catch (err) {
        handleHttpError(res,'The resource could not be created');
    }
};


// const update = async (req,res) => {
//     try {
     
//         const {id, ...body} = matchedData(req);
//         const data = await tracksModel.findOneAndUpdate(id.body);
//         console.log(body);
//         res.send({data})
        
//     } catch (err) {
//         handleHttpError(res,'Error update');
//     }
// };


// const remove = async (req,res) => {
//     try {
//         req = matchedData(req); // validate- filter id
//         const {id} = req;
//         const finData = await tracksModel.delete({_id:id});
//         const data = {
//             finData,
//             deleted : true,
//         };
//         res.send({data});
        
//     } catch (err) {
//         handleHttpError(res,'Error Delete');
//     };
// };
// module.exports = {
//     getAll,
//     getOne,
//     create,
//     update,
//     remove
// }