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
  console.log('CREATED')
  console.log(object)
  res.status(201).json({activity});
}));

router.put('/', 
  asyncHandler(async (req, res, next) => {
  const { heroId } = req.body;

  const today = new Date()
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();

  const activity = await ActivityLog.findOne({
    where: [
      {hero_id: heroId},
      sequelize.where(sequelize.fn('date', sequelize.col('createdAt')),
      // 'regex', `${year}-${month}-${date}`)
      '=', `${y}-${m}-${d}`)
    ]
  });

  if (activity.action < 10) {
    await activity.update({
      action: activity.action + 1
    });
  }
  
  res.json({activity});
}));

module.exports = router;