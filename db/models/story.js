'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    hero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Heros'
      }
    },
    world_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Worlds'
      }
    },
    start_date: {
      type: DataTypes.DATE
    },
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
  };
  return Story;
};