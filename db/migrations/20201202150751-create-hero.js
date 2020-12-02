'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users'
        }
      },
      world_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Worlds'
        }
      },
      level: {
        type: Sequelize.INTEGER,
        default: 0
      },
      hp: {
        type: Sequelize.INTEGER,
        default: 100,
        max: 100
      },
      xp: {
        type: Sequelize.INTEGER,
        default: 0
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
    return queryInterface.dropTable('Heros');
  }
};