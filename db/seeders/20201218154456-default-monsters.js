'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Monsters', [
      {
        story_id: 1,
        name: 'Procastination',
        strength: 4,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        story_id: 1,
        name: 'Video game',
        strength: 6,
        createdAt: new Date(2020, 11, 6),
        updatedAt: new Date(2020, 11, 6)
      },
      {
        story_id: 1,
        name: 'Netflix',
        strength: 3,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Monsters', null, {});
  }
};
