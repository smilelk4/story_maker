const router = require('express').Router();
const { Story, World, ActivityLog } = require('../../db/models');
const { asyncHandler } = require('../../utils');
const { createError } = require('../../utils');
const { sequelize } = require('../../db/models');
const { Op } = require('sequelize');
const moment = require('moment');

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
  // const day = req.
  console.log('-------------')
  console.log(moment().format())
  // console.log(req.get(headerName))

  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  // console.log('TODAY', today)
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  // console.log(y, m, d)

  const activity =  await sequelize.query(`
  SELECT * FROM "ActivityLogs" AS "ActivityLog" 
  WHERE "ActivityLog"."hero_id" = ${heroId}
  AND (date("createdAt") BETWEEN '2020-12-15 00:00:00' AND '2020-12-15 23:59:59'
  AT TIME ZONE 'America/New_York')
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

  console.log('-------------')
  console.log(activity)

  if (activity.action < 10) {
    // const data = await ActivityLog.findByPk(activity[0][0].id);
    await data.update({
      action: data.action + 1
    });
  }
  res.json({activity: activity[0][0]});
}));

module.exports = router;