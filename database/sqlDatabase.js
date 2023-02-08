const Sequelize = require("sequelize");

const sequelize = new Sequelize("expensetrackeraws", "root", "root", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;