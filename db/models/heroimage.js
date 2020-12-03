'use strict';
module.exports = (sequelize, DataTypes) => {
  const HeroImage = sequelize.define('HeroImage', {
    image_url: {
      type: DataTypes.STRING(500),
      allowNull: false,
      unique: true
    },
  }, {});
  HeroImage.associate = function(models) {
    // associations can be defined here
  };
  return HeroImage;
};