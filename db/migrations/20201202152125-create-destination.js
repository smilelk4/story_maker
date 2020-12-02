'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Destinations', {
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
          model: 'Stories'
        }
      },
      parent_destination_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      subtitle: {
        type: Sequelize.STRING(150)
      },
      description: {
        type: Sequelize.STRING(500)
      },
      target_date: {
        type: Sequelize.DATE
      },
      accomplished: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      importance: {
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
    return queryInterface.dropTable('Destinations');
  }
};