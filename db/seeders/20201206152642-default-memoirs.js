'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Memoirs', [
      {
        hero_id: 1,
        story_id: 1,
        title: 'Learned about const and let.',
        description: `I learned about const and let and how their scopes are different.`,
        hours_fought: 4,
        accomplishment_level: 7,
        createdAt: new Date(2020, 11, 5),
        updatedAt: new Date(2020, 11, 5)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: 'Interesting stuff',
        description: null,
        hours_fought: 4,
        accomplishment_level: 5.5,
        createdAt: new Date(2020, 11, 7),
        updatedAt: new Date(2020, 11, 7)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `Couldn't focus well`,
        description: null,
        hours_fought: 4.4,
        accomplishment_level: 1.8,
        createdAt: new Date(2020, 11, 8),
        updatedAt: new Date(2020, 11, 8)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: 'Well-worked.',
        description: `I learned some new things today. Feeling pretty accomplished.`,
        hours_fought: 5,
        accomplishment_level: 9.6,
        createdAt: new Date(2020, 11, 9),
        updatedAt: new Date(2020, 11, 9)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `Couldn't study much today.`,
        description: `Tomorrow, I will work harder.`,
        hours_fought: 1,
        accomplishment_level: 2,
        createdAt: new Date(2020, 11, 12),
        updatedAt: new Date(2020, 11, 12)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `So tired but fullfilled.`,
        description: `My brain is about to explode. Learned a lot about the fundamentals of JS today.`,
        hours_fought: 6.5,
        accomplishment_level: 8,
        createdAt: new Date(2020, 11, 13),
        updatedAt: new Date(2020, 11, 13)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: 'Loops are fun.',
        description: `Still get sometimes confused, but loops aren't too bad.`,
        hours_fought: 3,
        accomplishment_level: 5.4,
        createdAt: new Date(2020, 11, 15),
        updatedAt: new Date(2020, 11, 15)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `It's going`,
        description: null,
        hours_fought: 5,
        accomplishment_level: 5.8,
        createdAt: new Date(2020, 11, 17),
        updatedAt: new Date(2020, 11, 17)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `Didn't have much time today`,
        description: null,
        hours_fought: 1,
        accomplishment_level: 2.8,
        createdAt: new Date(2020, 11, 20),
        updatedAt: new Date(2020, 11, 20)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: 'Principles of OOP',
        description: `Things are getting more complicated.
        I gotta go back to the ideas of OOP because I'm not totally clear yet.`,
        hours_fought: 5.7,
        accomplishment_level: 6.2,
        createdAt: new Date(2020, 11, 26),
        updatedAt: new Date(2020, 11, 26)
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
