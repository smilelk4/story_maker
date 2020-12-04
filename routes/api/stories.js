const router = require('express').Router();
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { world } = req.body;
  const user = await User.create({
    username: username.trim(),
    email: email.trim(),
    hashed_password: await hashPassword(password.trim())
  });

  const { token } = generateToken(user.id, user.username);

  res.status(201).json({ token, user });
}));

module.exports = router;