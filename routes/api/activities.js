const router = require('express').Router();
const { Story, World, ActivityLog } = require('../../db/models');
const { asyncHandler } = require('../../utils');
const { createError } = require('../../utils');
const { sequelize } = require('../../db/models');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { heroId } = req.body;
  
  const activity = await ActivityLog.create({
    action: 1,
    hero_id: heroId
  });
  res.status(201).json({activity});
}));

router.put('/', 
  asyncHandler(async (req, res, next) => {
  const { heroId } = req.body;

  const today = new Date();
  today.setMinutes(today.getMinutes() + today.getTimezoneOffset());
  const year = today.getFullYear()
  const month = today.getMonth() + 1;
  const date = today.getDate();
        
  const activity = await ActivityLog.findOne({
  where: [
    {hero_id: heroId},
    sequelize.where(sequelize.fn('date', sequelize.col('createdAt')),
                    '=', `${year}-${month}-${date}`)
  ]
  });

  if (!activity) next(createError('No activity found'));

  if (activity.action < 10) {
    await activity.update({
      action: activity.action + 1
    });
  } else {
    next(createError('Already reached 10 actions today, so no actions added.'));
  }
  
  res.json({activity});
}));

module.exports = router;