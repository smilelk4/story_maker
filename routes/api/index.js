const router = require('express').Router();
const routes = ['users', 'heroes', 'worlds'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;