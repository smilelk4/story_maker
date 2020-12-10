const router = require('express').Router();
const { Story, World, DailyTask } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { title, 
          storyId } = req.body;
        
  const task = await DailyTask.create({
    story_id: storyId,
    title
  });

  res.status(201).json({task});
}));

router.put('/:id(\\d+)', 
  asyncHandler(async (req, res) => {
  const { id } = req.params;
        
  const task = await DailyTask.findOne({
    where: { id }
  });

  await task.update({
    last_accomplished: new Date()
  });
    res.status(204).json({task});
}));

router.delete('/:id(\\d+)', 
  asyncHandler(async (req, res) => {
  const { id } = req.params;
        
  const task = await DailyTask.findOne({
    where: { id }
  });

  await task.destroy();
  res.status(204);
}));

module.exports = router;