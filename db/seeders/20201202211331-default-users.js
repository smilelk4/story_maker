'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      username: "demo_user",
      email: "demo_user@demo.com", 
      profile_image: "https://story-maker-app.s3.amazonaws.com/profile.png",
      hashed_password: "$2a$10$d/MyGooikJ.Vs.J5qrsmB.hRQe9UyLVIuYGo0Q1v3XMShfi9EwRji",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
