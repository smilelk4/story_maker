'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Monster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Monster.init({
    story_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    strength: DataTypes.INTEGER,
    times_defeated: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Monster',
  });
  return Monster;
};