const { check } = require('express-validator');
const { User } = require('../db/models');

const usernameValidation = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid username.')
    .isLength({ min: 3 })
    .withMessage('Username must be longer than 3 characters.')
    .isLength({ max: 30 })
    .withMessage('Username must not be longer than 30 characters.')
    .trim().matches(/^\w+$/)
    .withMessage('Username must only contain alphabets, numbers, and _(underscores).')
    .custom(value => {
      return User.findOne({ where: { username: value } }).then(user => {
        if (user) {
          throw new Error('The provided username is already used by another account.');
        }
        return true;
      });
    })
];

module.exports = [
  usernameValidation
];