const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');

const getDBConnection = require('../connection');

dotenv.config();
const { ProjectsCollection } = process.env;

const UpdateProjectById = async (id, newValues) => {
  const db = await getDBConnection();

  const updatedProject = await db.collection(ProjectsCollection).updatedOne(
    { _id: new ObjectId(id) },
    { $set: newValues },
  );

  return updatedProject;
};

module.exports = UpdateProjectById;
