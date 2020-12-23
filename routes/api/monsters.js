const router = require('express').Router();
const { Monster, MonsterImage } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { storyId, name, strength } = req.body;

  let monsterImageId;
  if (strength === 1) {
    monsterImageId = 1;
  }
  else if (strength <= 5) {
    monsterImageId = (Math.ceil(Math.random() * 3) + 1);
  } else if (strength <= 7) {
    monsterImageId = 3;
    monsterImageId = (Math.ceil(Math.random() * 2) + 4);
  } else {
    monsterImageId = (Math.ceil(Math.random() * 2) + 6);
  }

  const monsterImage = await MonsterImage.findByPk(monsterImageId);
          
  const monster = await Monster.create({
    story_id: storyId,
    name,
    strength,
    image_id: monsterImageId
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

router.put('/:id(\\d+)', 
  asyncHandler(async (req, res) => {
  const { id } = req.params;
  // console.log(monsterId, typeof monsterId, '!!!!!')
  const monster = await Monster.findByPk(id, {
    include: [MonsterImage]
  });

  await monster.update({ times_defeated: monster.times_defeated + 1 });
  
  res.json({ monster: {
    id: monster.id,
    storyId: monster.story_id,
    name: monster.name,
    strength: monster.strength,
    timesDefeated: monster.times_defeated,
    image: monster.MonsterImage.image_url,
    createdAt: monster.createdAt
  }});
}));

module.exports = router;