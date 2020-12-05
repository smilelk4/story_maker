const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Hero, HeroImage, Story } = require('../../db/models');
const { generateToken, checkIfAuthenticated } = require('../../auth');
const { hashPassword } = require('../../utils');
const userValidation = require('../../validators/userValidator');
const { handleValidationErrors, asyncHandler } = require('../../utils');

const createError = msg => {
  const err = new Error(msg);
  err.title = 'Invalid Login';
  err.status = 401;
  err.errors = [err.message];
  return err;
}

router.post('/auth', asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    res.locals.user = await User.findOne({ where: { email } });
  } catch (e) {
    next(e);
  }

  const { user } = res.locals;
  if (!user) next(createError('Invalid login.'));

  const isValidPassword = bcrypt.compareSync(password, user.hashed_password.toString());
  
  if (!isValidPassword) next(createError('Invalid login.'));

  const { token } = generateToken(user.id, user.username);
  return res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      profileImage: user.profile_image
    }
  });
}));

router.get('/token', checkIfAuthenticated, (req, res) => {
  const { id, username, profile_image: profileImage } = res.locals.user;

  res.json({
    user: {
      id,
      username,
      profileImage
    }
  });
});

router.post('/', 
  userValidation, 
  handleValidationErrors,
  asyncHandler(async (req, res) => {
  const { username, email, password, profileImage } = req.body;
  const user = await User.create({
    username: username.trim(),
    email: email.trim(),
    hashed_password: await hashPassword(password.trim())
  });

  const { token } = generateToken(user.id, user.username);

  res.status(201).json({ token, user });
}));

// router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findByPk(id);
//   res.json({ user });
// }));

router.get('/:id(\\d+)/heroes', asyncHandler(async (req, res) => {
  const heroes = await Hero.findAll({ 
    where: { 
      user_id: req.params.id,
    },
    include: [HeroImage]
  });

  if (!heroes.length) next(createError('No heroes found.'));
  res.json({ heroes });
}));

module.exports = router;