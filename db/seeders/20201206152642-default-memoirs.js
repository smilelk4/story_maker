'use strict';
const { subtractDate } = require('../../utils');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Memoirs', [
      {
        hero_id: 1,
        story_id: 1,
        title: 'Learned about const and let.',
        description: `I learned about const and let and how their scopes are different.`,
        hours_fought: 4.1,
        accomplishment_level: 7,
        createdAt: subtractDate(14),
        updatedAt: subtractDate(14)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: 'Learned some good stuff today',
        description: null,
        hours_fought: 4.4,
        accomplishment_level: 5.5,
        createdAt: subtractDate(12),
        updatedAt: subtractDate(12)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `Couldn't focus well`,
        description: null,
        hours_fought: 4.4,
        accomplishment_level: 1.8,
        createdAt: subtractDate(10),
        updatedAt: subtractDate(10)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: 'Well-worked.',
        description: `I learned some new things today. Feeling pretty accomplished.`,
        hours_fought: 5.4,
        accomplishment_level: 9.6,
        createdAt: subtractDate(7),
        updatedAt: subtractDate(7)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `Couldn't study much today.`,
        description: `Tomorrow, I will work harder.`,
        hours_fought: 1,
        accomplishment_level: 2,
        createdAt: subtractDate(6),
        updatedAt: subtractDate(6)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `So tired but feeling accomplished.`,
        description: `My brain is about to explode.`,
        hours_fought: 6.5,
        accomplishment_level: 8,
        createdAt: subtractDate(5),
        updatedAt: subtractDate(5)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: 'Feeling okay with loops.',
        description: `Still get sometimes confused, but loops aren't too bad.`,
        hours_fought: 3,
        accomplishment_level: 5.4,
        createdAt: subtractDate(4),
        updatedAt: subtractDate(4)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `Learned a lot about fundamentals today.`,
        description: null,
        hours_fought: 5,
        accomplishment_level: 5.8,
        createdAt: subtractDate(3),
        updatedAt: subtractDate(3)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `Didn't have much time today`,
        description: null,
        hours_fought: 1,
        accomplishment_level: 2.8,
        createdAt: subtractDate(2),
        updatedAt: subtractDate(2)
      },
      {
        hero_id: 1,
        story_id: 2,
        title: 'Things are going okay',
        description: `Slow, but things are going.`,
        hours_fought: 4.8,
        accomplishment_level: 6,
        createdAt: subtractDate(1),
        updatedAt: subtractDate(1)
      },
      {
        hero_id: 1,
        story_id: 2,
        title: 'Had a productive day',
        description: `Today was great, need to keep it up!`,
        hours_fought: 7,
        accomplishment_level: 10,
        createdAt: subtractDate(2),
        updatedAt: subtractDate(2)
      },
      {
        hero_id: 1,
        story_id: 2,
        title: `Couldn't focus well`,
        description: null,
        hours_fought: 4.4,
        accomplishment_level: 1.8,
        createdAt: subtractDate(10),
        updatedAt: subtractDate(10)
      },
      {
        hero_id: 1,
        story_id: 2,
        title: 'Well-worked.',
        description: `I learned some new things today. Feeling pretty accomplished.`,
        hours_fought: 5.4,
        accomplishment_level: 9.6,
        createdAt: subtractDate(7),
        updatedAt: subtractDate(7)
      },
      {
        hero_id: 1,
        story_id: 2,
        title: 'This book I read was great',
        description: `I was suggested to read this business book. It was amazing.`,
        hours_fought: 8,
        accomplishment_level: 8.2,
        createdAt: subtractDate(50),
        updatedAt: subtractDate(50)
      },
      {
        hero_id: 1,
        story_id: 2,
        title: 'The guest speaker today was inspiring',
        description: `Mind-blown!`,
        hours_fought: 9,
        accomplishment_level: 9,
        createdAt: subtractDate(37),
        updatedAt: subtractDate(37)
      },
      {
        hero_id: 1,
        story_id: 3,
        title: 'Learned some good things',
        description: null,
        hours_fought: 4.4,
        accomplishment_level: 5.5,
        createdAt: subtractDate(12),
        updatedAt: subtractDate(12)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `Couldn't focus well`,
        description: null,
        hours_fought: 4.4,
        accomplishment_level: 1.8,
        createdAt: subtractDate(10),
        updatedAt: subtractDate(10)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: 'Well-worked.',
        description: `I learned some new things today. Feeling pretty accomplished.`,
        hours_fought: 5.4,
        accomplishment_level: 9.6,
        createdAt: subtractDate(7),
        updatedAt: subtractDate(7)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `Couldn't study much today.`,
        description: `Tomorrow, I will work harder.`,
        hours_fought: 1,
        accomplishment_level: 2,
        createdAt: subtractDate(6),
        updatedAt: subtractDate(6)
      },
      {
        hero_id: 1,
        story_id: 1,
        title: `So tired but feeling accomplished.`,
        description: `My brain is about to explode.`,
        hours_fought: 6.5,
        accomplishment_level: 8,
        createdAt: subtractDate(5),
        updatedAt: subtractDate(5)
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Memoirs', null, {});
  }
};
