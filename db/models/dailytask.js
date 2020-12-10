'use strict';
module.exports = (sequelize, DataTypes) => {
  const DailyTask = sequelize.define('DailyTask', {
    hero_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Heros'
      }
    },
    title: {
      type: DataTypes.STRING(150),
    },
    last_accomplished: {
      type: DataTypes.DATE
    },
  }, {});
  DailyTask.associate = function(models) {
    DailyTask.belongsTo(models.Hero, { foreignKey: 'hero_id' });
  };
  return DailyTask;
};