const router = require('express').Router();
const { Story, World, Hero, HeroImage, ActivityLog } = require('../../db/models');
const { asyncHandler } = require('../../utils');

const createError = msg => {
  const err = new Error(msg);
  err.title = 'Invalid Login';
  err.status = 401;
  err.errors = [err.message];
  return err;
}

router.get('/', asyncHandler(async (_req, res) => {
  const heroImages = await HeroImage.findAll();

  if (!heroImages) next(createError('No hero images found.'));
  res.json({ heroImages });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const hero = await Hero.findByPk(req.params.id, {
    include: [HeroImage]
  });

  res.json({ hero: {
    id: hero.id,
    worldId: hero.world_id,
    name: hero.name,
    level: hero.level,
    hp: hero.hp,
    xp: hero.xp,
    image: hero.HeroImage.image_url
  }});
}));

router.get('/:id(\\d+)/stories', asyncHandler(async (req, res, next) => {
  const stories = await Story.findAll({
    where: {
      hero_id: req.params.id
    },
    include: [World]
    });

  // if (!stories.length) next(createError('No stories found.'));
  res.json({ stories });
}));

router.get('/:id(\\d+)/activities', asyncHandler(async (req, res, next) => {
  let heroId = req.params.id;
  const activities = await ActivityLog.findAll({
    where: {
      hero_id: heroId
    },
    attributes: {
      exclude: ['id', 'updatedAt']
    },
    order: [['createdAt', 'ASC']]
  });

  if (!activities.length) next(createError('No activities found.'));

  const memo = {};
  let lastActiveDate = 1;

  activities.forEach(activity => {
    let month = activity.createdAt.getMonth() + 1;
    let date = activity.createdAt.getDate();
    
    if (!(heroId in memo)) {
      memo[heroId] = {
        [month]: [activity.point]
      };

      for (i=1; i<date; i++) {
        memo[heroId][month].unshift(0);
      }

      lastActiveDate = date;
    } else {
      if (!(month in memo[heroId])) {
        lastActiveDate = 1;
        memo[heroId][month] = [activity.point];

        for (i=1; i<date; i++) {
          memo[heroId][month].unshift(0);
        }

        lastActiveDate = date;
      } else {
        for (i=lastActiveDate; i<date - 1; i++) {
          memo[heroId][month].push(0);
        }

        memo[heroId][month].push(activity.point);

        lastActiveDate = date;
      }
    }
  });

  for (let month in memo[heroId]) {
    let monthArrayLength = memo[heroId][month].length;

    if ([1, 3, 5, 7, 8, 10, 12].includes(+month)) {
      for (i=monthArrayLength; i<31; i++) {
        memo[heroId][month].push(0);
      }
    } else if (+month === 2) {
        for (i=monthArrayLength; i<=28; i++) {
          memo[heroId][month].push(0);
        }
    } else {
      for (i=monthArrayLength; i<=30; i++) {
        memo[heroId][month].push(0);
      }
    }
  }
      
  res.json({ activities: memo });
}));

router.post('/', 
  asyncHandler(async (req, res) => {
  const { name,
          userId,
          worldId,
          heroId } = req.body;
        
  const hero = await Hero.create({
    user_id: userId,
    world_id: worldId,
    name,
    image_id: heroId
  });

  const heroImage = await HeroImage.findByPk(heroId);

  res.status(201).json({ hero: {
    id: hero.id,
    worldId: hero.world_id,
    name: hero.name,
    level: hero.level,
    hp: hero.hp,
    xp: hero.xp,
    image: heroImage.image_url
  }});
}));

module.exports = router;