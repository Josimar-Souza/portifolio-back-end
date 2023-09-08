const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');

const getDBConnection = require('../connection');

dotenv.config();
const { ProjectsCollection } = process.env;

const DeleteProjectById = async (id) => {
  const db = await getDBConnection();

  const hasDeleted = await db.collection(ProjectsCollection).deleteOne({ _id: new ObjectId(id) });

  return hasDeleted;
};

module.exports = DeleteProjectById;
