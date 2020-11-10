const Sequelize = require('sequelize');

const {
  DB_NAME,
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_DIALECT,
} = require('../environment');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
