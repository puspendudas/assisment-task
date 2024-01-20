var User = require("../../models/user.model");
const { Sequelize } = require("sequelize");
const { genarateToken } = require("../../functions/generateToken");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ where: { email } });

    console.log(user);

    // If user not found or password is invalid, return an error response
    if (!user || !(await user.validPassword(password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // If the username and password are valid, you can generate a token or send a success response
    // For simplicity, here we are just sending a success response
    res.status(200).json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
      },
      token: { data: "Bearer", token: genarateToken() },
      msg: `${user.name} has been successfully Login.`,
    });
  } catch (err) {
    console.log(err);
    const errObj = {};
    err.errors.map((er) => {
      errObj[er.path] = er.message;
    });
    res.status(422).json({ error: errObj });
  }
};

module.exports = { loginController };
