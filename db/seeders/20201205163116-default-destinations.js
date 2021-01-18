'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Destinations', [
      {
        story_id: 1,
        parent_destination_id: null,
        title: "Obtain a job as full-stack programmer",
        description: `Hoping to stay around the area, but shall consider the \
          option of moving too.
          Salary target: 60K or more.
          First, need to obtain some more skills to start applying.`,
        target_date: new Date(2021, 10, 1),
        accomplished: false,
        importance: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 1,
        title: "Learn JS fundamentals",
        description: `Some resources: 
          YouTube, MDN, FreeCodeCamp`,
        target_date: new Date(2020, 11, 20),
        accomplished: true,
        importance: 5.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 2,
        title: "Learn about variables.",
        description: "Let, const, var",
        target_date: new Date(2020, 11, 8),
        accomplished: true,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 2,
        title: "Learn for and while loops.",
        description: null,
        target_date: new Date(2020, 11, 16),
        accomplished: true,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 2,
        title: "Study map and forEach",
        description: null,
        target_date: new Date(2020, 11, 18),
        accomplished: true,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 2,
        title: "Try out a problem on Code Wars",
        description: null,
        target_date: new Date(2020, 11, 22),
        accomplished: true,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 1,
        title: "Study OOP",
        description: `Constructors, inheritance.`,
        target_date: new Date(2020, 12, 1),
        accomplished: false,
        importance: 6.4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 1,
        title: "Create a frontend project using Vanilla JS",
        description: `Using plain JS, I will create an app that users can leave \
        comments on posts.`,
        target_date: new Date(2020, 12, 20),
        accomplished: false,
        importance: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 6,
        title: "Code along three tutorials that create frontend apps.",
        description: `Maybe look into some YouTube tutorials.`,
        target_date: new Date(2020, 12, 10),
        accomplished: false,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 1,
        title: "Create a Mini Project Using three NPM Packages",
        description: `What are npm packages?`,
        target_date: new Date(2020, 12, 18),
        accomplished: false,
        importance: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 8,
        title: "Create a simple number-guessing game using Node",
        description: null,
        target_date: new Date(2020, 12, 27),
        accomplished: false,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 1,
        title: "Learn NodeJS",
        description: `What are npm packages?`,
        target_date: new Date(2021, 1, 8),
        accomplished: false,
        importance: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 1,
        title: "Create a full-stack app using Express",
        description: `I must learn about servers first.`,
        target_date: new Date(2021, 1, 28),
        accomplished: false,
        importance: 8.7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 10,
        title: "Create a simple app that uses Express to do CRUD operations",
        description: null,
        target_date: new Date(2021, 1, 14),
        accomplished: false,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 1,
        title: "Learn React",
        description: null,
        target_date: new Date(2021, 2, 17),
        accomplished: false,
        importance: 8.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 11,
        title: "Learn React Lifecycle",
        description: null,
        target_date: new Date(2021, 1, 29),
        accomplished: false,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 11,
        title: "Learn Redux",
        description: `Gotta look into some good resources.`,
        target_date: new Date(2021, 2, 9),
        accomplished: false,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 1,
        parent_destination_id: 11,
        title: "Learn React Hooks",
        description: null,
        target_date: new Date(2021, 2, 14),
        accomplished: false,
        importance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        story_id: 2,
        parent_destination_id: null,
        title: "Startup web app business",
        description: `I need to think of a way to monetize the app.`,
        target_date: new Date(2021, 12, 10),
        accomplished: false,
        importance: 10,
        createdAt: new Date(2020, 11, 10),
        updatedAt: new Date(2020, 11, 10)
      },
      {
        story_id: 2,
        parent_destination_id: 16,
        title: "Take a class on e-commerce",
        description: `I need to think of a way to monetize the app.`,
        target_date: new Date(2021, 2, 15),
        accomplished: false,
        importance: 8,
        createdAt: new Date(2020, 12, 10),
        updatedAt: new Date(2020, 12, 10)
      },
      {
        story_id: 3,
        parent_destination_id: null,
        title: "Get an inquiry to develop full-stack application for a company",
        description: `I need to first practice by creating a few full-stack apps.`,
        target_date: new Date(2021, 10, 1),
        accomplished: false,
        importance: 10,
        createdAt: new Date(2020, 11, 10),
        updatedAt: new Date(2020, 11, 10)
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
