const router = require('express').Router();
const { Story, World, ActivityLog } = require('../../db/models');
const { asyncHandler } = require('../../utils');
const { createError } = require('../../utils');
const { sequelize } = require('../../db/models');
const { Op } = require('sequelize');
const moment = require('moment');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { heroId, userTime } = req.body;
  
  const activity = await ActivityLog.create({
    action: 1,
    hero_id: heroId,
    createdAt: new Date(userTime),
    updatedAt: new Date(userTime)
  });
  res.status(201).json({activity});
}));

router.put('/', 
  asyncHandler(async (req, res, next) => {
  const { heroId, userTime } = req.body;
  const today = userTime.split('T')[0];

  const timezoneOffset = userTime.slice(
    userTime.length - 6, userTime.length - 3);
  // console.log(today)
  // console.log(timezoneOffset)

  // console.log(req.body.userTime)

  // console.log(req.get(headerName))

  // const today = new Date();
  // today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  // console.log('TODAY', today)
  // const y = today.getFullYear();
  // const m = today.getMonth() + 1;
  // const d = today.getDate();
  // console.log(y, m, d)

  // const today = moment().format().split('T')[0];
  // const tz = moment().format().split(':')[2].slice(3);

  const activity =  await sequelize.query(`
  SELECT * FROM "ActivityLogs" AS "ActivityLog" 
  WHERE "ActivityLog"."hero_id" = ${heroId}
  AND (date("createdAt") BETWEEN 
    '${today} 00:00:00${timezoneOffset}' AND '${today} 23:59:59${timezoneOffset}'
  AT TIME ZONE 'UTC')
  LIMIT 1;`)

  // console.log('------------')
  // console.log(activity.rows)

  // const activity = await ActivityLog.findOne({
  //   where: [
  //     {hero_id: heroId},
      // sequelize.where(sequelize.fn('date', sequelize.col('createdAt')),
      // '=', `${y}-${m}-${d}`)
      // {createdAt: {
      //   [Op.iLike]: `${y}-${m}-${d}`
      // }}
      // , {
      //   dialectOptions: {
      //     dateStrings: true,
      //     typeCast: true,
      //   },
      //   timezone: 'America/New_York'
      // }
  //   ],
  // });

  if (activity[0][0].action < 10) {
    const data = await ActivityLog.findByPk(activity[0][0].id);
    await data.update({
      action: data.action + 1
    });
  }
  res.json({activity: activity[0][0]});
}));

module.exports = router;