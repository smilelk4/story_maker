const router = require('express').Router();
const { DailyTask, Story } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { title, storyId } = req.body;
        
  const task = await DailyTask.create({
    story_id: storyId,
    title,
  });

  task.dataValues.Story = await Story.findByPk(task.story_id);
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
  res.status(200).json({ task: { id } });
}));

module.exports = router;