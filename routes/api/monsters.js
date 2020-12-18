const router = require('express').Router();
const { Story, World, Monster } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { storyId, name, strength } = req.body;
        
  const monster = await Monster.create({
    story_id: storyId,
    name,
    strength
  });

  res.status(201).json({ monster: {
    id: monster.id,
    storyId: monster.story_id,
    name: monster.name,
    strength: monster.strength,
    timesDefeated: monster.times_defeated,
    createdAt: monster.createdAt
  }});
}));

module.exports = router;