'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Monsters', [
      {
        story_id: 1,
        name: 'Procastination',
        strength: 4,
        image_id: 4,
        times_defeated: 4,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        story_id: 1,
        name: 'Video Game',
        strength: 6,
        image_id: 6,
        times_defeated: 11,
        createdAt: new Date(2020, 11, 6),
        updatedAt: new Date(2020, 11, 6)
      },
      {
        story_id: 1,
        name: 'Netflix Binge Watch',
        strength: 3,
        image_id: 3,
        times_defeated: 9,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        story_id: 1,
        name: 'Net Surfing',
        strength: 5,
        image_id: 5,
        times_defeated: 2,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        story_id: 2,
        name: 'Sleeping In',
        strength: 8,
        image_id: 7,
        times_defeated: 4,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        story_id: 2,
        name: 'Late Night Gaming with Friends',
        strength: 3,
        image_id: 2,
        times_defeated: 11,
        createdAt: new Date(2020, 11, 6),
        updatedAt: new Date(2020, 11, 6)
      },
      {
        story_id: 2,
        name: 'House Obligations',
        strength: 3,
        image_id: 3,
        times_defeated: 9,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        story_id: 2,
        name: 'Spending on Unnecessary Goods',
        strength: 9,
        image_id: 7,
        times_defeated: 2,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        story_id: 3,
        name: 'Concentration Loss',
        strength: 10,
        image_id: 8,
        times_defeated: 4,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        story_id: 3,
        name: 'Procastination',
        strength: 4,
        image_id: 4,
        times_defeated: 20,
        createdAt: new Date(2020, 11, 6),
        updatedAt: new Date(2020, 11, 6)
      },
      {
        story_id: 3,
        name: 'Motivation Loss',
        strength: 3,
        image_id: 3,
        times_defeated: 9,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        story_id: 3,
        name: 'Duties',
        strength: 2,
        image_id: 1,
        times_defeated: 10,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Monsters', null, {});
  }
};
