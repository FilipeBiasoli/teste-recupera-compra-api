'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'Supermercado',
        description:
          'Destinado ao comércio de alimentos, bebidas, utensílios domésticos, produtos pet e, às vezes, eletrônicos e utensílios domésticos.',
      },
      {
        id: 2,
        name: 'Departamento',
        description:
          'Destinado ao comércio de sapatos, roupas, acessórios, cosméticos, jóias, artigos de decoração, camas, mesas, banho e muito mais.',
      },
      {
        id: 3,
        name: 'Tecnologia',
        description:
          'Destinado ao comércio de alimentos, bebidas, utensílios domésticos, produtos pet e, às vezes, eletrônicos e utensílios domésticos.',
      },
      {
        id: 4,
        name: 'Supermercado',
        description:
          'Destinado ao comércio de sapatos, roupas, acessórios, cosméticos, jóias, artigos de decoração, camas, mesas, banho e muito mais.',
      },
      {
        id: 5,
        name: 'Departamento',
        description:
          'Destinado ao comércio de alimentos, bebidas, utensílios domésticos, produtos pet e, às vezes, eletrônicos e utensílios domésticos.',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', {
      id: [1, 2, 3, 4, 5],
    });
  },
};
