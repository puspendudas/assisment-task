const { DataTypes } = require("sequelize");
const db = require("../database/index");
const bcrypt = require("bcrypt");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: {
      arg: true,
      msg: "The email address is already in use",
    },
    validate: {
      isEmail: true,
      notEmpty: {
        msg: "The email can't empty",
      },
    },
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  // Add more fields as needed
});

// Hash and salt the password before saving
User.beforeCreate(async (user) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);
  user.password = hashedPassword;
});

// Example of password validation middleware
User.prototype.validPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = User;
