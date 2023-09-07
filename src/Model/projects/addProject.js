const dotenv = require('dotenv');

const getDBConnection = require('../connection');

dotenv.config();

const { ProjectsCollection } = process.env;

const AddProject = async (newProject) => {
  const db = await getDBConnection();

  const { insertedId: id } = await db.collection(ProjectsCollection).insertOne(newProject);

  const projectAdded = {
    ...newProject,
    _id: id,
  };

  return projectAdded;
};

module.exports = AddProject;
