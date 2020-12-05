'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hero = sequelize.define('Hero', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    world_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
    },
    level: {
      type: DataTypes.INTEGER,
    },
    hp: {
      type: DataTypes.INTEGER,
      max: 100
    },
    xp: {
      type: DataTypes.INTEGER,
    },
    image_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Hero.associate = function(models) {
    Hero.belongsTo(models.User, { foreignKey: 'user_id' });
    Hero.belongsTo(models.World, { foreignKey: 'world_id' });
    Hero.belongsTo(models.HeroImage, { foreignKey: 'image_id' });

    Hero.hasMany(models.Story, { foreignKey: 'hero_id' });
  };
  return Hero;
};