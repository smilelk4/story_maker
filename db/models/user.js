'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    hashed_password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    profile_image: {
      type: DataTypes.STRING(500)
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};