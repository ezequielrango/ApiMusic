const {tracksModel} = require('../models/index');
module.exports = {

    getAll: async () => {
        const tracks = await tracksModel.find({});
        return tracks;
      },
    
    
}

