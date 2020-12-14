'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Worlds', [
      {
        name: "Nerd World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creative World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lazy World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mysterious World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Logical World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Risky World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Adventurous World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Worlds', null, {});
  }
};
