'use strict';
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('Destination', {
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Story'
      }
    },
    parent_destination_id: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    subtitle: {
      type: DataTypes.STRING(150)
    },
    description: {
      type: DataTypes.STRING(500)
    },
    target_date: {
      type: DataTypes.DATE
    },
    accomplished: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    importance: {
      type: DataTypes.FLOAT(4),
      allowNull: false,
      max: 10
    },
  }, {});
  Destination.associate = function(models) {
    // associations can be defined here
  };
  return Destination;
};