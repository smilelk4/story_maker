const router = require('express').Router();
const { World } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.get('/', asyncHandler(async (_req, res) => {
  const worlds = await World.findAll();

  if (!worlds.length) next(createError('No stories found.'));
  res.json({ worlds });
}));

module.exports = router;