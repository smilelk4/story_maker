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
    label: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    start_date: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
  }, {});
  Story.associate = function(models) {
    Story.belongsTo(models.Hero, { foreignKey: 'hero_id' });
    Story.belongsTo(models.World, { foreignKey: 'world_id' });
  };
  return Story;
};