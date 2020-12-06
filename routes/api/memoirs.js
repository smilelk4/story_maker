const router = require('express').Router();
const { Story, World, Memoir } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { heroId, 
          storyId, 
          title, 
          description, 
          hoursFought, 
          accomplishmentLevel } = req.body;
        
  const memoir = await Memoir.create({
    hero_id: heroId,
    story_id: storyId,
    title,
    description,
    hours_fought: hoursFought,
    accomplishment_level: accomplishmentLevel
  });

  res.status(201).json({ memoirs: [memoir] });
}));

module.exports = router;