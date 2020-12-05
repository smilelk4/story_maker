'use strict';
module.exports = (sequelize, DataTypes) => {
  const Monster = sequelize.define('Monster', {
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Stories"
      }
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    strength: {
      type: DataTypes.FLOAT(4),
      allowNull: false
    },
    times_defeated: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Monster.associate = function(models) {
    // associations can be defined here
  };
  return Monster;
};