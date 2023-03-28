'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Joyce Sampaio',
        email: 'joyce.sampaio@gmail.com',
      },
      {
        id: 2,
        name: 'Flavia Oliveira',
        email: 'flavia.oliveira@gmail.com',
      },
      {
        id: 3,
        name: 'Talita Flausino',
        email: 'talita.flausino@gmail.com',
      },
      {
        id: 4,
        name: 'Letícia Fernanda',
        email: 'leticia.fernanda@gmail.com',
      },
      {
        id: 5,
        name: 'Filipe Biasoli',
        email: 'filipe.biasoli@gmail.com',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {
      id: [1, 2, 3, 4, 5],
    });
  },
};
