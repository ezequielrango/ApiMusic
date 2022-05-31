const tracksRepository = require('../repositories/tracks');
const { handleHttpError } = require('../utils/handleErrors');

module.exports = {

  getAll: async (req, res) => {
    try {
      const tracks = await tracksRepository.getAll();
      const user = await req.user; // MOVER CONTROLLER CON HANDLER
      if (tracks.length === 0) {
        return { status: 404, response: 'Not Found' };
      };
      const data = {
        RequestAuthor: user,
        tracks
      };
      return { status: 200, data };

    } catch (error) {
      return { status: 500, response: 'Internal Server Error' };
    };
  },
  getOne: async (id) => {
    try {
      const track = await tracksRepository.getOne(id);
      if (!track) {
        return { status: 404, response: 'Not Found' };
      };
      return { status: 200, response: track };

    } catch (error) {
      return { status: 500, response: 'Internal Server Error' };
    };
  },
  create: async(data) =>{
    try {
      const newTrack = await tracksRepository.create(data);
      return { status: 201, response: newTrack }; 

    } catch (error) {
      return { status: 500, response: 'Internal Server Error' };
    };
  },
};