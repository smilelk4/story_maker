'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Story.init({
    hero_id: DataTypes.INTEGER,
    world_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};