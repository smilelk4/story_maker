'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [
      {
        hero_id: 1,
        world_id: 1,
        title: "Obtain a job as full-stack programmer.",
        label: 1,
        start_date: new Date(2020, 7, 13);
      },
      {
        hero_id: 1,
        world_id: 1,
        title: "Startup web app business.",
        label: 2,
        start_date: new Date(2020, 10, 15);
      },
      {
        hero_id: 1,
        world_id: 1,
        title: "Get an inquiry to develop full-stack application for a company.",
        label: 3,
        start_date: new Date(2020, 8, 22);
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
