'use strict';
module.exports = (sequelize, DataTypes) => {
  const DailyTask = sequelize.define('DailyTask', {
    hero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Heros'
      }
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    last_accomplished: {
      type: DataTypes.DATE
    },
  }, {});
  DailyTask.associate = function(models) {
    // associations can be defined here
  };
  return DailyTask;
};