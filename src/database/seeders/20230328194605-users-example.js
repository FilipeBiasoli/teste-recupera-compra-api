'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Joyce Sampaio',
        email: 'joyce.sampaio@gmail.com',
        password: '123',
      },
      {
        id: 2,
        name: 'Flavia Oliveira',
        email: 'flavia.oliveira@gmail.com',
        password: '123',
      },
      {
        id: 3,
        name: 'Talita Flausino',
        email: 'talita.flausino@gmail.com',
        password: '123',
      },
      {
        id: 4,
        name: 'Letícia Fernanda',
        email: 'leticia.fernanda@gmail.com',
        password: '123',
      },
      {
        id: 5,
        name: 'Filipe Biasoli',
        email: 'filipe.biasoli@gmail.com',
        password: '123',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {
      id: [1, 2, 3, 4, 5],
    });
  },
};
