'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('HeroImages', [
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/1.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/2.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/3.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/4.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/5.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/6.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/7.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/8.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/9.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/10.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/11.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/12.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/13.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/14.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/15.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/16.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/17.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/18.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/19.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/20.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/21.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/22.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/23.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: "https://story-maker-app.s3.amazonaws.com/hero-icons/24.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HeroImages', null, {});
  }
};
