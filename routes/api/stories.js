const router = require('express').Router();
const { Story, World, Destination } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { worldId, heroId, title, destinationTitle, targetDate, importance } = req.body;
  let story = await Story.create({
    title: title.trim(),
    hero_id: heroId,
    world_id: worldId,
  });

  await Destination.create({
    story_id: story.id,
    title: destinationTitle,
    target_date: targetDate,
    importance
  });

  story = await Story.findOne({
    where: { 
      id: story.id
    },
    include: [World]
  });

  res.status(201).json({ stories: [story] });
}));

router.get('/:id(\\d+)/destinations',
asyncHandler(async (req, res) => {
  const destinations = await Destination.findAll({
    where: {
      story_id: req.params.id,
    },
    order: [['target_date', 'ASC']]
  });

    // if (!destinations.length) next(createError('No destinations found.'));
    res.json({ destinations })
}));

module.exports = router;