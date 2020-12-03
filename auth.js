const bearerToken = require('express-bearer-token');
const jwt = require('jsonwebtoken');

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

module.exports = {
  generateToken
};