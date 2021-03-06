'use strict';
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('Destination', {
    story_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Story'
      }
    },
    parent_destination_id: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING(150),
    },
    description: {
      type: DataTypes.STRING(500)
    },
    target_date: {
      type: DataTypes.DATE
    },
    accomplished: {
      type: DataTypes.BOOLEAN,
    },
    importance: {
      type: DataTypes.FLOAT(4),
      max: 10
    },
  }, {});
  Destination.associate = function(models) {
    Destination.belongsTo(models.Story, { foreignKey: 'story_id' });
    Destination.belongsTo(models.Destination, { 
      foreignKey: 'parent_destination_id',
      as: 'ParentDestination',
      otherKey: 'parent' });
  };
  return Destination;
};