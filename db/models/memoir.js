'use strict';
module.exports = (sequelize, DataTypes) => {
  const Memoir = sequelize.define('Memoir', {
    hero_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Heros"
      }
    },
    story_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Stories"
      }
    },
    title: {
      type: DataTypes.STRING(150),
    },
    description: {
      type: DataTypes.STRING(3000)
    },
    hours_fought: {
      type: DataTypes.INTEGER,
      max: 24
    },
    accomplishment_level: {
      type: DataTypes.FLOAT(4),
      max: 10
    }
  }, {});
  Memoir.associate = function(models) {
    // associations can be defined here
  };
  return Memoir;
};