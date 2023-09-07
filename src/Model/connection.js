const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const { DB_NAME, DB_URL } = process.env;
let db = null;

const getDBConnection = async () => {
  try {
    if (!db) {
      db = (await MongoClient.connect(DB_URL)).db(DB_NAME);
    }
  } catch (e) {
    process.exit(1);
  }

  return db;
};

module.exports = getDBConnection;
