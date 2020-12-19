'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Monsters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      story_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Stories"
        }
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      strength: {
        type: Sequelize.FLOAT(4),
        allowNull: false
      },
      times_defeated: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      image_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: 'MonsterImages'
        }
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
    return queryInterface.dropTable('Monsters');
  }
};