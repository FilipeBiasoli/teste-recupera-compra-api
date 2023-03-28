'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  },
};
