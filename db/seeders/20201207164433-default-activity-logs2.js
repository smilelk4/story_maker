'use strict';
const { activityLogsDataAutomator } = require('../../utils');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ActivityLogs', activityLogsDataAutomator(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ActivityLogs', null, {});
  }
};