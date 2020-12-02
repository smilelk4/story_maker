'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: "demo_user",
      email: "demo_user@demo.com", 
      profile_image: "https://screenrant.com/wp-content/uploads/2018/03/Ocean-Master-Aquaman-Brother-Superhero.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
