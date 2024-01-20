const { Sequelize } = require("sequelize");
const {
  DB_DATABASE,
  DB_USER,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
} = require("../config");

const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: "mysql",
  host: DB_HOST,
  port: parseInt(DB_PORT),
  timezone: "+05:30",
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  benchmark: true,
});


module.exports = sequelize;
