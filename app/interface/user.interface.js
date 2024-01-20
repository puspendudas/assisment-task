const validator = require("validator");

const userInterface = [
  { name: "name", required: true },
  { name: "email", required: true, validate: validator.isEmail },
  { name: "password", required: true },
];

const loginInterface = [
  { name: "email", required: true, validate: validator.isEmail },
  { name: "password", required: true },
];

module.exports = { userInterface, loginInterface };
