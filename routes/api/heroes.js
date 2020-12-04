const router = require('express').Router();
const { Story, World } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.get('/:id(\\d+)/stories', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({
    where: {
      hero_id: req.params.id
    },
    include: [World]
  })

  if (!stories) next(createError('No stories found.'));
  res.json({ stories });
}));

module.exports = router;