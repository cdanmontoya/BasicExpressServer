const {
  DB_PASS,
  DB_USER,
  DB_HOST,
} = process.env;

const MONGODB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

/**
 * This URI structure is meant to be used on MongoDB Atlas.
 * You can update it if you use another provider.
 */
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;

module.exports = {
  MONGO_URI,
  MONGODB_OPTIONS,
};
