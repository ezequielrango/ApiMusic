const UsersRepository = require('../repositories/user');

module.exports = {
    getAll: async (req, res) => {
      try {
        const users = await UsersRepository.getAll();
        res.status(200).json({ data: users });
      } catch (error) {
        res.status(500).json("internal server error");
      }
    },
}