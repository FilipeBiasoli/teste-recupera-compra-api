require('dotenv').config();
const Sequelize = require('sequelize');
const database = require('./database');

module.exports = new Sequelize(database[process.env.NODE_ENV]);
