/**
 * Server configuration
 */
const { DEV, PORT } = require('./environment');

const port = DEV ? 5000 : PORT;
const morganMode = DEV ? 'dev' : 'tiny';

module.exports = {
  port,
  morganMode,
};
