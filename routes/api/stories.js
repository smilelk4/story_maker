const router = require('express').Router();
const { Story } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { worldId, heroId, title, goal } = req.body;
  const story = await Story.create({
    title: title.trim(),
    hero_id: heroId,
    world_id: worldId,
  });

  res.status(201).json({ story });
}));

module.exports = router;