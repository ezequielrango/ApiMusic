const userService = require('../services/user');

const controller = {
    getAll: async (req, res) => {
      try {
        const users = await userService.getAll(req, res);
        res.json(users);
      } catch (error) {
        res.status(500).json("internal server error");
      }
    },
    getOne: async (req,res) => {
      try {
        const oneUser = await userService.getOne(req,res);
        res.status(200).json({ data:oneUser});
      } catch (error) {
        res.status(500).json("internal server error");
      }
    }
}
  module.exports = controller;

