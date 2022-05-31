const RequestAuthor = async (req,res) => {
    const user = await req.user;
    return user
  }

  module.exports = {RequestAuthor}