'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Joyce Sampaio',
        email: 'joyce.sampaio@gmail.com',
        password: '123456',
      },
      {
        id: 2,
        name: 'Flavia Oliveira',
        email: 'flavia.oliveira@gmail.com',
        password: '654321',
      },
      {
        id: 3,
        name: 'Talita Flausino',
        email: 'talita.flausino@gmail.com',
        password: '142536',
      },
      {
        id: 4,
        name: 'Letícia Fernanda',
        email: 'leticia.fernanda@gmail.com',
        password: '635241',
      },
      {
        id: 5,
        name: 'Filipe Biasoli',
        email: 'filipe.teste@gmail.com',
        password: '000000',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {
      id: [1, 2, 3, 4, 5],
    });
  },
};
