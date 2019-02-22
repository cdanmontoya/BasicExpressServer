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
const mongoHost = '';
const mongoPort = '27017';
const mongoDatabase = '';
const mongoOpt = {
    user: '',                             // DB Username
    pass: '',                             // DB 
    dbName: ''
  };

/**
 * MongoDB URL. Can be a local or a remote one.
 */
const mongoDB = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}`;

module.exports = {
    port,
    morganMode,
    mongoDB,
    mongoOpt
};