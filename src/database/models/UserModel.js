const Sequelize = require('sequelize');
const database = require('../../config/sequelize');

const UserModel = database.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(35),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
);

module.exports = UserModel;
