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
      defaultValue: 'New Hero'
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
      max: 100
    },
    xp: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  }, {});
  Hero.associate = function(models) {
    // associations can be defined here
  };
  return Hero;
};