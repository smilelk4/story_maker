const router = require('express-promise-router')();
const { User } = require('../../db/models');

router.get('/:id(\\d+)', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.json({ user });
});

module.exports = router;