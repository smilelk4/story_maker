'use strict';
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('Destination', {
    story_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Story'
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
      type: Sequelize.FLOAT(4, 2),
      allowNull: false,
      max: 10
    },
  }, {});
  Destination.associate = function(models) {
    // associations can be defined here
  };
  return Destination;
};