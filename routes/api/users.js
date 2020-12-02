const router = require('express-promise-router')();
const { User } = require('../../db/models');

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