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

const activityLogsDataAutomator = () => {
  let dateCount = 1;
  let data = [];

  for (let i = 0; i < 365; i++) {
    let date = ( d => new Date(d.setDate(d.getDate()-dateCount)) )(new Date);

    data.push({
      point: Math.ceil(Math.random() * 10),
      hero_id: 1,
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
  activityLogsDataAutomator
}