'use strict';
module.exports = (sequelize, DataTypes) => {
  const DailyTask = sequelize.define('DailyTask', {
    story_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Stories'
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
    DailyTask.belongsTo(models.Story, { foreignKey: 'story_id' });
  };
  return DailyTask;
};