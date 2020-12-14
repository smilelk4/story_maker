const router = require('express').Router();
const { ActivityLog, DailyTask } = require('../../db/models');
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

  if (req.body.inputtedIInfo) {
    await task.update({
      title: req.body.inputtedIInfo
    });
  } else {
    await task.update({
      last_accomplished: new Date()
    });
  }

  res.json({task});
}));

router.delete('/:id(\\d+)', 
  asyncHandler(async (req, res) => {
  const { id } = req.params;
        
  const task = await DailyTask.findOne({
    where: { id }
  });

  await task.destroy();
  res.status(200);
}));

module.exports = router;