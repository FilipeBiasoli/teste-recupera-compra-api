const Sequelize = require('sequelize');
const database = require('../../config/sequelize');

const CategoryModel = database.define(
  'categories',
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
    description: {
      type: Sequelize.STRING(150),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
);

module.exports = CategoryModel;
