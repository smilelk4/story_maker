'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Memoirs', {
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
          model: "Heros"
        }
      },
      story_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Stories"
        }
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(3000)
      },
      hours_fought: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        max: 24
      },
      accomplishment_level: {
        type: Sequelize.FLOAT(4),
        allowNull: false,
        max: 10
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
    return queryInterface.dropTable('Memoirs');
  }
};