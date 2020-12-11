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

router.put('/:id(\\d+)/stats', asyncHandler(async (req, res, next) => {
  const xpRaise = req.body.xp;

  const hero = await Hero.findOne({
    where: {
      id: req.params.id
    }
  });

  let heroXP = hero.xp;
  let heroLV = hero.level;
  const maxXP = Math.floor(100 ** (heroLV / 50) * 10);

  if ((heroXP + xpRaise) < maxXP) {
    await hero.update({
      xp: heroXP + xpRaise
    });
  } else if ((heroXP + xpRaise) === maxXP) {
    await hero.update({
      level: heroLV + 1,
      xp: 0
    });
  } else {
    let xpDifference = (heroXP + xpRaise) - maxXP;
    await hero.update({
      level: heroLV + 1,
      xp: xpDifference
    });
  }

  res.json({ hero });
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

  const memo = {};
  const initialMonthData = [];
  for (let i=0; i<28; i++) {
    initialMonthData.push(0);
  }

  memo[heroId] = {
    1: [...initialMonthData, 0, 0, 0],
    2: initialMonthData,
    3: [...initialMonthData, 0, 0, 0],
    4: [...initialMonthData, 0, 0],
    5: [...initialMonthData, 0, 0, 0],
    6: [...initialMonthData, 0, 0],
    7: [...initialMonthData, 0, 0, 0],
    8: [...initialMonthData, 0, 0, 0],
    9: [...initialMonthData, 0, 0],
    10: [...initialMonthData, 0, 0, 0],
    11: [...initialMonthData, 0, 0],
    12: [...initialMonthData, 0, 0, 0],
  }

  activities.forEach(activity => {
    let month = activity.createdAt.getMonth() + 1;
    let date = activity.createdAt.getDate();
    memo[heroId][month].splice(date - 1, 1, activity.action);
  });

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

// router.post('/:id(\\d+)/activities', 
//   asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   const today = new Date();
//   const year = today.getFullYear()
//   const month = today.getMonth() + 1;
//   const date = today.getDate()

//   const activity = await ActivityLog.findOne({
//     where: [
//       {hero_id: id},
//       sequelize.where(sequelize.fn('date', sequelize.col('createdAt')),
//                                        '=', `${year}-${month}-${date}`)
//     ]
//   })

//   // NOT COMPLETED
// }));

module.exports = router;