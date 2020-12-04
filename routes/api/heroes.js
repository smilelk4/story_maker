// const router = require('express-promise-router')();
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Story } = require('../../db/models');
const { generateToken, checkIfAuthenticated } = require('../../auth');
const { hashPassword } = require('../../utils');
const userValidation = require('../../validators/userValidator');
const { handleValidationErrors, asyncHandler } = require('../../utils');

router.get('/:id(\\d+)/stories', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({
    where: {
      hero_id: req.params.id
    }
  })

  if (!stories) next(createError('No stories found.'));
  res.json({ stories });
}));

module.exports = router;