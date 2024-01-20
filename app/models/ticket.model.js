const { DataTypes } = require("sequelize");
const db = require("../database/index");

const Ticket = db.define("Ticket", {
    numbers: {
        type: DataTypes.JSON,
        allowNull: false,
      }
  // Add more fields as needed
});

module.exports = Ticket;
