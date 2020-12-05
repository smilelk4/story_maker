'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(30),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    hashed_password: {
      type: DataTypes.STRING.BINARY,
    },
    profile_image: {
      type: DataTypes.STRING(500)
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Hero, { foreignKey: 'user_id' });
  };
  return User;
};