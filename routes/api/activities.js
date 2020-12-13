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

  const today = new Date();
  // today.setMinutes(today.getMinutes() + today.getTimezoneOffset());
  const year = today.getFullYear()
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const time = today.getTime();
  // console.log('TODAY', today.toLocaleDateString())
  const t = new Date()
  t.setMinutes(t.getMinutes() - t.getTimezoneOffset())
  const y = t.getFullYear()
  const m = t.getMonth() + 1;
  const d = t.getDate()
  const h = t.getHours();
  const min = t.getMinutes();
  // console.log(t.getTimezoneOffset())
  console.log('TTTTTT')
  console.log(t)
  // console.log(y, m, d, h, min)
  // console.log(new Date(y, m, d, h, min))

  console.log('--------------------------------------------')
  const activity = await ActivityLog.findOne({
    where: [
      {hero_id: heroId},
      sequelize.where(sequelize.fn('date', sequelize.col('createdAt')),
      // 'regex', `${year}-${month}-${date}`)
      '=', `${y}-${m}-${d}`)
    ]
  });
  
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log(activity.toJSON());
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log('--------------------------------------------')
  // if (!activity) next(createError('No activity found'));

  if (activity.action < 10) {
    await activity.update({
      action: activity.action + 1
    });
  }
  
  res.json({activity});
}));

module.exports = router;