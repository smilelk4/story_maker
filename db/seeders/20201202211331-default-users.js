'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      username: "demo_user",
      email: "demo_user@demo.com", 
      profile_image: "https://story-maker-app.s3.amazonaws.com/profile.png",
      hashed_password: "$2b$10$bTXgso5bqIsnQevfe92QpuPCL8DfEXiY6jY5IVilJR0.OGHlfsV6.",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
