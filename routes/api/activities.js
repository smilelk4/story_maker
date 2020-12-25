const router = require('express').Router();
const { Story, World, ActivityLog } = require('../../db/models');
const { asyncHandler } = require('../../utils');
const { createError } = require('../../utils');
const { sequelize } = require('../../db/models');
const { Op } = require('sequelize');

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
    const { tz } = req.query;  
    const today = userTime.split('T')[0];

  const timezoneOffset = userTime.slice(
    userTime.length - 6, userTime.length - 3);

  const activity =  await sequelize.query(`
    SELECT * FROM "ActivityLogs" AS "ActivityLog" 
    WHERE "ActivityLog"."hero_id" = ${heroId}
    AND (date("createdAt") BETWEEN 
      '${today} 00:00:00${timezoneOffset}' AND '${today} 23:59:59${timezoneOffset}'
    AT TIME ZONE '${tz}')
    AND (date("updatedAt") BETWEEN 
      '${today} 00:00:00${timezoneOffset}' AND '${today} 23:59:59${timezoneOffset}'
    AT TIME ZONE '${tz}')
    LIMIT 1;`)

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