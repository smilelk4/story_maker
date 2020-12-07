'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ActivityLogs', [
      {
        point: 4,
        hero_id: 1,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date()
      },
      {
        point: 6,
        hero_id: 1,
        createdAt: new Date(2020, 11, 6),
        updatedAt: new Date()
      },
      {
        point: 4,
        hero_id: 1,
        createdAt: new Date(2020, 11, 7),
        updatedAt: new Date()
      },
      {
        point: 3,
        hero_id: 1,
        createdAt: new Date(2020, 11, 8),
        updatedAt: new Date()
      },
      {
        point: 1,
        hero_id: 1,
        createdAt: new Date(2020, 11, 9),
        updatedAt: new Date()
      },
      {
        point: 9,
        hero_id: 1,
        createdAt: new Date(2020, 11, 10),
        updatedAt: new Date()
      },
      {
        point: 8,
        hero_id: 1,
        createdAt: new Date(2020, 11, 11),
        updatedAt: new Date()
      },
      {
        point: 0,
        hero_id: 1,
        createdAt: new Date(2020, 11, 12),
        updatedAt: new Date()
      },
      {
        point: 6,
        hero_id: 1,
        createdAt: new Date(2020, 11, 13),
        updatedAt: new Date()
      },
      {
        point: 5,
        hero_id: 1,
        createdAt: new Date(2020, 11, 14),
        updatedAt: new Date()
      },
      {
        point: 6,
        hero_id: 1,
        createdAt: new Date(2020, 11, 15),
        updatedAt: new Date()
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ActivityLogs', null, {});
  }
};
