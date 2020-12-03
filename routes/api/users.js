const router = require('express-promise-router')();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { generateToken } = require('../../auth');

router.post('/auth', async (req, res) => {
  const { email, password } = req.body;

  try {
    res.locals.user = await User.findOne({ where: { email } });
  } catch (e) {
    next(e);
  }

  const { user } = res.locals;

  const isValidPassword = bcrypt.compareSync(password, res.locals.user.hashed_password.toString());
  if (!isValidPassword) {
    const err = new Error('Invalid login information.');
    err.title = 'Invalid Login';
    err.status = 401;
    next(err);
  }

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