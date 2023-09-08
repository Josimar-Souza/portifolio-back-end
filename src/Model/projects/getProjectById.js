const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');

const getDBConnection = require('../connection');

dotenv.config();

const { ProjectsCollection } = process.env;

const GetProjectById = async (id) => {
  const db = await getDBConnection();

  const project = await db.collection(ProjectsCollection).findOne({ _id: ObjectId(id) });

  return project;
};

module.exports = GetProjectById;
