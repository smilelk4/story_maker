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
      {
        story_id: 2,
        title: 'Read 10 pages of a book',
        last_accomplished: ( d => new Date(d.setDate(d.getDate()-1)) )(new Date),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 2,
        title: 'Write down ideas',
        last_accomplished: ( d => new Date(d.setDate(d.getDate()-1)) )(new Date),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 2,
        title: 'Meditate',
        last_accomplished: ( d => new Date(d.setDate(d.getDate()-1)) )(new Date),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 3,
        title: 'Work out to fresh out the brain',
        last_accomplished: ( d => new Date(d.setDate(d.getDate()-1)) )(new Date),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 3,
        title: 'Connect with a person on LinkedIn',
        last_accomplished: ( d => new Date(d.setDate(d.getDate()-1)) )(new Date),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 3,
        title: 'Study for at least an hour',
        last_accomplished: ( d => new Date(d.setDate(d.getDate()-1)) )(new Date),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 3,
        title: 'Write out business tactics',
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
