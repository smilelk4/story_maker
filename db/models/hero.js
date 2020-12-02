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
    level: {
      type: DataTypes.INTEGER,
      default: 0
    },
    hp: {
      type: DataTypes.INTEGER,
      default: 100,
      max: 100
    },
    xp: {
      type: DataTypes.INTEGER,
      default: 0
    },
  }, {});
  Hero.associate = function(models) {
    // associations can be defined here
  };
  return Hero;
};