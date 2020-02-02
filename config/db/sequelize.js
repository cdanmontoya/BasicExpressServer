const Sequelize = require('sequelize');

const {
  DB_NAME,
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_DIALECT,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  DB_HOST,
  DB_DIALECT,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
