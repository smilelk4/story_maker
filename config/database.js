const config = require('./');
const { username, password, database, host } = config.db;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      ssl:true
    },
    // timezone: 'UTC',
  }
}