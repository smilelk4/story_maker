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

  res.status(201).json({ memoir: {
    id: memoir.id,
    heroId: memoir.hero_id,
    storyId: memoir.story_id,
    title: memoir.title,
    description: memoir.description,
    hoursFought: memoir.hours_fought,
    accomplishmentLevel: memoir.accomplishment_level,
    date: memoir.createdAt
  }});
}));

router.put('/:id(\\d+)', 
  asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { newTitle: title, newDescription: description, 
          newHoursFought: hoursFought,
          newAccomplishmentLevel: accomplishmentLevel } = req.body;
        
  const memoir = await Memoir.findOne({
    where: { id }
  });

  await memoir.update({
    title,
    description,
    hours_fought: +hoursFought,
    accomplishment_level: +accomplishmentLevel
  });

  res.json({ memoir: {
    id: memoir.id,
    heroId: memoir.hero_id,
    storyId: memoir.story_id,
    title: memoir.title,
    description: memoir.description,
    hoursFought: memoir.hours_fought,
    accomplishmentLevel: memoir.accomplishment_level,
    date: memoir.createdAt
  }});
}));

router.delete('/:id(\\d+)', 
  asyncHandler(async (req, res) => {
  const { id } = req.params;
        
  const memoir = await Memoir.findOne({
    where: { id }
  });

  await memoir.destroy();
  res.status(200).json({ memoir: { id } });
}));

module.exports = router;