const router = require('express').Router();
const { Story, World, Hero, HeroImage } = require('../../db/models');
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
  const hero = await Hero.findByPk(req.params.id);

  res.json({ hero });
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

module.exports = router;