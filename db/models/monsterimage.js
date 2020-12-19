'use strict';
module.exports = (sequelize, DataTypes) => {
  const MonsterImage = sequelize.define('MonsterImage', {
    image_url: {
      type: DataTypes.STRING(500),
    },
  }, {});
  MonsterImage.associate = function(models) {
    MonsterImage.hasMany(models.Monster, { foreignKey: 'image_id' });
  };
  return MonsterImage;
};