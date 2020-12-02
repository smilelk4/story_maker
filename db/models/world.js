'use strict';
module.exports = (sequelize, DataTypes) => {
  const World = sequelize.define('World', {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false, 
      unique: true
    },
  }, {});
  World.associate = function(models) {
    // associations can be defined here
  };
  return World;
};