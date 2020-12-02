'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DailyTasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hero_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Heros'
        }
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      last_accomplished: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DailyTasks');
  }
};