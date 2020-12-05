'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Stories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      hero_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Heros'
        }
      },
      world_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Worlds'
        }
      },
      difficulty: {
        type: Sequelize.INTEGER(),
        defaultValue: 1
      },
      start_date: {
        type: Sequelize.DATE,
        defaultValue: new Date()
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
    return queryInterface.dropTable('Stories');
  }
};