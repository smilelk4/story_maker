'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: {
      type: DataTypes.STRING(150),
    },
    hero_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Heros'
      }
    },
    world_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Worlds'
      }
    },
    difficulty: {
      type: DataTypes.INTEGER,
    },
    start_date: {
      type: DataTypes.DATE,
    },
  }, {});
  Story.associate = function(models) {
    Story.belongsTo(models.Hero, { foreignKey: 'hero_id' });
    Story.belongsTo(models.World, { foreignKey: 'world_id' });
    Story.hasMany(models.DailyTask, { foreignKey: 'story_id' });
    Story.hasMany(models.Destination, { foreignKey: 'story_id' });
  };
  return Story;
};