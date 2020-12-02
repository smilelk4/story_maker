'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DailyTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DailyTask.init({
    hero_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    last_accomplished: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DailyTask',
  });
  return DailyTask;
};