/**
 * Server configuration
 */
const port = process.env.DEV ? 5000 : 8080;
const morganMode = process.env.Dev ? 'dev' : 'tiny';

/**
 * MongoDB credentials
 */
const mongoUser = '';
const mongoPassword = '';
const mongoURI = '';

/**
 * MongoDB URL. Can be a local or a remote one.
 */
const mongoDB = `mongodb://${mongoUser}:${mongoPassword}@${mongoURI}`;

module.exports = {
    port,
    morganMode,
    mongoDB
};