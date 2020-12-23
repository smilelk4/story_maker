'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MonsterImages', [
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/monster-icons/bat.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/monster-icons/goblin.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/monster-icons/thief-goblin.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/monster-icons/mage-goblin.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/monster-icons/slime.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/monster-icons/golem.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/monster-icons/mage.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/monster-icons/knight.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MonsterImages', null, {});
  }
};