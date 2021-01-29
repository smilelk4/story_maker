const cors = require('cors');
const cookieParser = require('cookie-parser')
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const csurf = require('csurf');
const { ValidationError } = require('sequelize');
const routes = require('./routes');
const { environment } = require('./config');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser())

const production = environment === 'production';
if (!production) {
  app.use(cors({ origin: true }));
}
app.use(helmet({ contentSecurityPolicy: false }));

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get(/\/(?!api)*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(function(_req, _res, next) {
  const err = new Error('The requested resource couldn\'t be found.');
  err.errors = ['The requested resource couldn\'t be found.'];
  err.status = 404;
  next(err);
});

app.use((err, _req, _res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map(e => e.message);
    err.title = 'Sequelize Error';
  }
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  const isProduction = environment === 'production';

  const errorData = {
    title: err.title || 'Server Error',
    message: err.message,
    stack: isProduction ? null : err.stack,
    errors: err.errors
  };

  if (err.status === 401) {
    res.set('WWW-Authenticate', 'Bearer');
  }
  
  console.error(errorData);
  res.json(errorData);
});

module.exports = app;
