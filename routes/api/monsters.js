const router = require('express').Router();
const { Monster, MonsterImage } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { storyId, name, strength } = req.body;

  let monsterImageId;
  if (strength <= 3) {
    monsterImageId = Math.ceil(Math.random() * 2);
  } else if (strength <= 7) {
    monsterImageId = 3;
  } else {
    monsterImageId = 4;
  }

  const monsterImage = await MonsterImage.findByPk(monsterImageId);
        
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
    image: monsterImage.image_url,
    createdAt: monster.createdAt
  }});
}));

module.exports = router;