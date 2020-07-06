/**
 * Load environment variables from .env file
 */

 /** When deploy on heroku for example, there is no need of dotenv library
if (process.env.DEV) {
    const dotenv = require('dotenv');
    dotenv.config();
}
*/

const dotenv = require('dotenv');
dotenv.config();

const {
    DEV,
    PORT,
    DB_DIALECT,
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASS
} = process.env;

module.exports = {
    DEV,
    PORT,
    DB_DIALECT,
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASS
}