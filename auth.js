const bearerToken = require('express-bearer-token');
const jwt = require('jsonwebtoken');
const { User } = require('./db/models');

const { jwtConfig: { secret, expiresIn } } = require('./config');

const generateToken = (id, username) => {
  const data = { id, username };

  return {
    token: jwt.sign(
      { data },
      secret,
      { expiresIn: +expiresIn }
    )
  }
};

const restoreUser = (req, res, next) => {
  const { token } = req;

  if (!token) {
    const err = new Error('There\'s no token attached with the request.');
    err.status = 401;
    return next(err);
  }

  jwt.verify(token, secret, null, async (err, payload) => {
    if (err) {
      err.status = 403;
      return next(err);
    }

    try {
      res.locals.user = await User.findByPk(payload.data.id);
    } catch(e) {
      return next(e);
    }
    
    if (!res.locals.user) {
      const err = new Error('User not found with the given token.');
      err.status = 404;
      return next(err);
    }

    next();
  })
};

const checkIfAuthenticated = [bearerToken(), restoreUser];

module.exports = {
  generateToken,
  checkIfAuthenticated
}