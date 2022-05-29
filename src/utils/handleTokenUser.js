const {usersModel} = require('../models');

const getUserByToken = async (tokenId) => {

    const user = await usersModel.findById(tokenId).select('name role email');
    return user;
};

module.exports = {getUserByToken}