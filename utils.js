const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const hashPassword = async password => {
  return await bcrypt.hash(password, 10);
}

const handleValidationErrors = (req, _res, next) => {
  const validatorErrors = validationResult(req);

  if(!validatorErrors.isEmpty()) {
    const validationErrors = validatorErrors.array().map(e => e.msg);
    const err = new Error('Bad Request.');
    err.title = 'Bad Request.';
    err.status = 400;
    err.errors = validationErrors;
    return next(err);
  }
  next();
};

const asyncHandler = func => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  }
}

module.exports = {
  hashPassword,
  handleValidationErrors,
  asyncHandler
}