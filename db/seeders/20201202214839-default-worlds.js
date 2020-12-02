'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Worlds', [
      {
        name: "Programmer World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Artist World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Worlds', null, {});
  }
};
