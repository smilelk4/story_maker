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

module.exports = router;