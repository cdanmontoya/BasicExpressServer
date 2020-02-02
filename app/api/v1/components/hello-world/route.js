const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

router.route('/')
  .get((req, res) => controller.get(req, res));

module.exports = router;
