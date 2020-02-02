const { Router } = require('express');

const router = new Router();

/*
 * References to each resource routers
 */
const helloWorld = require('./components/hello-world/route');

router.use('/hello-world', helloWorld);

module.exports = router;
