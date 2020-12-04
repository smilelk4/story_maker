'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Heros', [
      {
        user_id: 1,
        world_id: 1,
        name: "Programmer Hero",
        image_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        world_id: 2,
        name: "Art Hero",
        image_id: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Heros', null, {});
  }
};