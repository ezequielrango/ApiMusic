const {usersModel} = require('../models');
module.exports = {
  getAll: () => User.find(),
  // getOne: (id) => User.findById(),
  // create: (data) => User.create(data),
  // update: (id,data) => User.findByIdAndUpdate(id,data),
  // remove: (id) => User.findByIdAndRemove(id),
};
