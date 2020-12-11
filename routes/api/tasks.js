const router = require('express').Router();
const { ActivityLog, DailyTask } = require('../../db/models');
const { asyncHandler } = require('../../utils');
// const { sequelize } = require('../../db/models');

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
  // const { heroId } = req.body;
        
  const task = await DailyTask.findOne({
    where: { id }
  });

  await task.update({
    last_accomplished: new Date()
  });

  // to update activity
  // const today = new Date();
  // const year = today.getFullYear()
  // const month = today.getMonth() + 1;
  // const date = today.getDate()

  // const activity = await ActivityLog.findOne({
  // where: [
  //   {hero_id: id},
  //   sequelize.where(sequelize.fn('date', sequelize.col('createdAt')),
  //                                     '=', `${year}-${month}-${date}`)
  // ]
  // });

  // console.log(activity, '!!!!!!')

  res.json({task});
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