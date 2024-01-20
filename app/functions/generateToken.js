const jwt = require("jsonwebtoken");
const config = require("../config");
const { v4: uuidv4 } = require("uuid");

// console.log(jwt.sign({ id: uuidv4() }, config.JWT_SECRET));
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFmNzY5ODJkLTUxYmYtNGY3MS1iYjliLTYyMDU2ZTg1YjE3OCIsImlhdCI6MTY2NTMzOTQ0OH0.rn_z76-0Q73tnkb0OIp-ZZrOYF_nflJB6AowEplEKlY

function genarateToken() {
  return jwt.sign({ id: uuidv4() }, config.JWT_SECRET);
}

module.exports = { genarateToken };
