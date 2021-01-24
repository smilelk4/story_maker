'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Heros', [
      {
        user_id: 1,
        world_id: 1,
        name: "Programmer Hero",
        level: 8,
        xp: 12,
        image_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        world_id: 2,
        name: "Business Hero",
        level: 2,
        xp: 9,
        image_id: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        world_id: 5,
        name: "Art Hero",
        level: 1,
        xp: 0,
        image_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Heros', null, {});
  }
};