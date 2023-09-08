const dotenv = require('dotenv');

const getDBConnection = require('../connection');

dotenv.config();

const { ProjectsCollection } = process.env;

const GetAllProjects = async () => {
  const db = await getDBConnection();

  const projects = await db.collection(ProjectsCollection).find({});

  return projects;
};

module.exports = GetAllProjects;
