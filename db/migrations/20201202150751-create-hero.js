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
      name: {
        type: Sequelize.STRING(100),
        defaultValue: 'New Hero'
      },
      level: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      hp: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
        max: 100
      },
      xp: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      image_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: 'HeroImages'
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
    return queryInterface.dropTable('Heros');
  }
};