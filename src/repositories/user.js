const  User  = require('../models/User');

module.exports = {
  getAll: () => User.find(),

};
