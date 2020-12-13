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
        name: "Enthusiast World",
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
        name: "Caring World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Determined World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dangerous World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cozy World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Adventure World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Worlds', null, {});
  }
};
