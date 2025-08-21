const { Sequelize } = require("sequelize");
const config = require(__dirname + "/../config/config.json")[
  process.env.NODE_ENV || "development"
];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: false, // 🚫 this kills query logs
  }
);

module.exports = sequelize;
