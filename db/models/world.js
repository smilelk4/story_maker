'use strict';
module.exports = (sequelize, DataTypes) => {
  const World = sequelize.define('World', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false, 
      unique: true
    },
  }, {});
  World.associate = function(models) {
    World.hasMany(models.Story, { foreignKey: 'world_id' });
    World.hasMany(models.Hero, { foreignKey: 'world_id' });
  };
  return World;
};