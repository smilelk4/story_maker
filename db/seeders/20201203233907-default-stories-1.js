'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [
      {
        hero_id: 1,
        world_id: 1,
        title: "Job-seeking Adventure",
        difficulty: 7,
        start_date: new Date(2020, 11, 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hero_id: 1,
        world_id: 1,
        title: "Startup web app business",
        difficulty: 7,
        start_date: new Date(2020, 10, 15),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hero_id: 1,
        world_id: 1,
        title: "Get an inquiry to develop full-stack application for a company",
        difficulty: 5,
        start_date: new Date(2020, 8, 22),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
