const router = require('express').Router();
const routes = ['users', 'heroes', 'worlds', 'stories', 'destinations', 'memoirs', 'tasks'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;