const bcrypt = require('bcryptjs');
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

const createError = msg => {
  const err = new Error(msg);
  err.title = msg;
  err.status = 401;
  err.errors = [err.message];
  return err;
}

const subtractDate = days => {
  return (d => new Date(d.setDate(d.getDate() - days)) )(new Date);
};

const activityLogsDataAutomator = (heroId) => {
  let dateCount = 0;
  let data = [];

  for (let i = 0; i < 730; i++) {
    let date = (d => new Date(d.setDate(d.getDate() + 365 - dateCount)) )(new Date);
    date.setMinutes(0, 0, 0);

    data.push({
      action: Math.ceil(Math.random() * 10),
      hero_id: heroId,
      createdAt: date,
      updatedAt: date
    });
    dateCount += 1;
  }
  return data;
};

module.exports = {
  hashPassword,
  handleValidationErrors,
  asyncHandler,
  createError,
  subtractDate,
  activityLogsDataAutomator
}