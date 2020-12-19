'use strict';
module.exports = (sequelize, DataTypes) => {
  const Monster = sequelize.define('Monster', {
    story_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Stories"
      }
    },
    name: {
      type: DataTypes.STRING(150),
    },
    strength: {
      type: DataTypes.FLOAT(4),
    },
    times_defeated: {
      type: DataTypes.INTEGER,
    },
    image_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Monster.associate = function(models) {
    Monster.belongsTo(models.MonsterImage, { foreignKey: 'image_id' });
  };
  return Monster;
};