const router = require('express-promise-router')();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { generateToken } = require('../../auth');

const createError = () => {
  const err = new Error('Invalid login information.');
  err.title = 'Invalid Login';
  err.status = 401;
  err.errors = [err.message];
  return err;
}

router.post('/auth', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    res.locals.user = await User.findOne({ where: { email } });
  } catch (e) {
    next(e);
  }

  const { user } = res.locals;
  if (!user) next(createError());

  const isValidPassword = bcrypt.compareSync(password, user.hashed_password.toString());
  
  if (!isValidPassword) next(createError());

  const { token } = generateToken(user.id, user.username);
  return res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      profileImage: user.profile_image
    }
  });
});

router.post('/', async (req, res) => {
  const { username, email, profile_image } = req.body;
  const user = await User.create({
    username,
    email,
    profile_image
  });
  res.json({ user });
});

router.get('/:id(\\d+)', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.json({ user });
});


module.exports = router;