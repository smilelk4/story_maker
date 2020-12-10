'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DailyTasks', [
      {
        story_id: 1,
        title: 'Read a programming-related article',
        last_accomplished: ( d => new Date(d.setDate(d.getDate()-1)) )(new Date),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        title: 'Solve a leet code problem',
        last_accomplished: ( d => new Date(d.setDate(d.getDate()-1)) )(new Date),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        title: 'Work for an hour on a React project',
        last_accomplished: ( d => new Date(d.setDate(d.getDate()-1)) )(new Date),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DailyTasks', null, {});
  }
};
