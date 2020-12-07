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
  const activities = await ActivityLog.findAll({
    where: {
      hero_id: req.params.id
    },
    attributes: {
      exclude: ['id', 'updatedAt']
    },

  });

  const memo = {};

  activities.forEach(activity => {
    let month = activity.createdAt.getMonth() + 1;
    let heroId = activity.hero_id;
    // let key = `${month}_${heroId}`;

    console.log(month, '!!!!!')

    if (!(heroId in memo)) {
      memo[heroId] = {
        [month]: [activity.point]
      };
    } else {
      if (!(month in memo[heroId])) {
        memo[heroId][month] = [activity.point];
      } else {
        memo[heroId][month].push(activity.point);
      }

      // memo[heroId].push(activity.point);
    }

    // if (!(heroId in memo)) {
      //   memo[heroId] = [activity];
      // } else {
        //   memo[heroId].push(activity);
        // }
      });
      
  console.log(memo)
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