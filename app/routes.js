/**
 * Router import
 */
const { Router } = require('express');

const router = new Router();

/**
 * References to the other routers of each resource
 */
const apiv1 = require('./api/v1/route');

/**
 * Paths defined to each resource
 */
router.use('/api/v1', apiv1);

module.exports = router;
