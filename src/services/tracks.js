const tracksRepository = require('../repositories/tracks');
const {handleHttpError} = require('../utils/handleErrors');

module.exports = {
    getAll: async (req,res) => {
        try {
          const tracks = await tracksRepository.getAll();
          const user = await req.user;
          if (tracks.length === 0) {
            return { response: handleHttpError(res,'Not Found',404) };
          }
          const data = {
            RequestAuthor:user,
            tracks
          }
          return {response:data};

        } catch (error) {
          return { response: handleHttpError(res,'Internal Server Error',500) };
        }
      },
}