/**
 * Server configuration
 */
const port = process.env.DEV ? 5000 : process.env.PORT;
const morganMode = process.env.DEV ? 'dev' : 'tiny';

module.exports = {
  port,
  morganMode,
};
