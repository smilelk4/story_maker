'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActivityLog = sequelize.define('ActivityLog', {
    action: DataTypes.INTEGER,
    hero_id: DataTypes.INTEGER
  }, {});
  ActivityLog.associate = function(models) {
    ActivityLog.belongsTo(models.Hero, { foreignKey: 'hero_id' });
  };
  return ActivityLog;
};