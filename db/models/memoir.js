'use strict';
module.exports = (sequelize, DataTypes) => {
  const Memoir = sequelize.define('Memoir', {
    hero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Heros"
      }
    },
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Stories"
      }
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false
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
      allowNull: false,
      max: 10
    },
    date: {
      type: DataTypes.DATE
    },
  }, {});
  Memoir.associate = function(models) {
    // associations can be defined here
  };
  return Memoir;
};