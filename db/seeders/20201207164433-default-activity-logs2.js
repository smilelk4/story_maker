'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ActivityLogs', [
      {
        point: 2,
        hero_id: 2,
        createdAt: new Date(2020, 10, 5),
        updatedAt: new Date()
      },
      {
        point: 7,
        hero_id: 2,
        createdAt: new Date(2020, 10, 6),
        updatedAt: new Date()
      },
      {
        point: 9,
        hero_id: 2,
        createdAt: new Date(2020, 10, 7),
        updatedAt: new Date()
      },
      {
        point: 2,
        hero_id: 2,
        createdAt: new Date(2020, 10, 8),
        updatedAt: new Date()
      },
      {
        point: 7,
        hero_id: 2,
        createdAt: new Date(2020, 10, 9),
        updatedAt: new Date()
      },
      {
        point: 9,
        hero_id: 2,
        createdAt: new Date(2020, 10, 10),
        updatedAt: new Date()
      },
      {
        point: 3,
        hero_id: 2,
        createdAt: new Date(2020, 10, 11),
        updatedAt: new Date()
      },
      {
        point: 4,
        hero_id: 2,
        createdAt: new Date(2020, 10, 12),
        updatedAt: new Date()
      },
      {
        point: 2,
        hero_id: 2,
        createdAt: new Date(2020, 10, 13),
        updatedAt: new Date()
      },
      {
        point: 9,
        hero_id: 2,
        createdAt: new Date(2020, 10, 14),
        updatedAt: new Date()
      },
      {
        point: 8,
        hero_id: 2,
        createdAt: new Date(2020, 10, 15),
        updatedAt: new Date()
      },
      {
        point: 9,
        hero_id: 2,
        createdAt: new Date(2020, 10, 20),
        updatedAt: new Date()
      },
      {
        point: 7,
        hero_id: 2,
        createdAt: new Date(2020, 10, 21),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ActivityLogs', null, {});
  }
};