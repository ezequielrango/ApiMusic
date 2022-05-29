const {usersModel} = require('../models');

const getUserByToken = async (tokenId) => {

    const user = await usersModel.findById(tokenId);
    return user;
};

module.exports = {getUserByToken}