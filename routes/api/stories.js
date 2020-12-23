const router = require('express').Router();
const { sequelize } = require('../../db/models');
const { Story, MonsterImage, World, Destination, 
        Memoir, DailyTask, Monster } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { worldId, heroId, title, destinationTitle, targetDate, importance } = req.body;
  let story = await Story.create({
    title: title.trim(),
    hero_id: heroId,
    world_id: worldId,
  });

  await Destination.create({
    story_id: story.id,
    title: destinationTitle,
    target_date: targetDate,
    importance
  });

  story = await Story.findOne({
    where: { 
      id: story.id
    },
    include: [World]
  });

  res.status(201).json({ stories: [story] });
}));

router.get('/:id(\\d+)',
asyncHandler(async (req, res) => {
  const story = await Story.findByPk(req.params.id);
  res.json({ story })
}));

router.get('/:id(\\d+)/destinations/?',
asyncHandler(async (req, res) => {
  const { state } = req.query;  
  const destinations = await Destination.findAll({
    where: {
      story_id: req.params.id,
      accomplished: state === 'accomplished',
    },
    include: [{
      model: Story,
      attributes: ['title']
    },{
      model: Destination,
      as: 'ParentDestination',
      attributes: ['title']
    }],
    order: [['target_date', 'ASC']]
  });
    // if (!destinations.length) next(createError('No destinations found.'));
    res.json({ destinations })
}));

router.get('/:id(\\d+)/tasks', asyncHandler(async (req, res, next) => {
  const tasks = await DailyTask.findAll({
    where: {
      story_id: req.params.id
    },
    include: {
      model: Story,
    }
  });

  res.json({ tasks });
}));

router.get('/:id(\\d+)/memoirs', asyncHandler(async (req, res) => {
  const memoirs = await Memoir.findAll({
    where: [ 
      {story_id: req.params.id},
      sequelize.where(sequelize.fn('date', sequelize.col('createdAt')),
                    '<=', new Date())
    ],
    order: [['createdAt', 'DESC']]
  });

  res.json({ memoirs });
}));

router.get('/:id(\\d+)/monsters', asyncHandler(async (req, res) => {
  const monsters = await Monster.findAll({
    where: [ 
      {story_id: req.params.id},
    ],
    include: [MonsterImage],
    order: [['createdAt', 'DESC']],
  });
  res.json({ monsters });
}));

router.get('/:id(\\d+)/progress', asyncHandler(async (req, res) => {
  const { id: finalDestinationId } = await Destination.findOne({
    where: [{ parent_destination_id: null }]
  });

  const destinations = await Destination.findAll({
    where: [ { parent_destination_id: finalDestinationId }],
  });

  const accomplishedDestinationsCount = destinations.filter(
        destination => destination.accomplished).length;

  res.json({ progress: accomplishedDestinationsCount / destinations.length });
}));

module.exports = router;