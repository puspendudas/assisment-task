var User = require("../../models/user.model");
const { Sequelize } = require("sequelize");

const add_user = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await User.create(req.body);
    res.status(200).json({
      success: true,
      data: {
        id: newUser.id,
        name: newUser.name,
      },
      msg: `${newUser.name} has been successfully created.`,
    });
  } catch (err) {
    const errObj = {};
    err.errors.map((er) => {
      errObj[er.path] = er.message;
    });
    res.status(422).json({ error: errObj });
  }
};

module.exports = { add_user };
