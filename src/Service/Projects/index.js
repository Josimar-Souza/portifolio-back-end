const AddProject = require('./addProject');
const GetAllProjects = require('./getAllProjects');
const GetProjectById = require('./getProjectById');

const projectServices = {
  AddProject,
  GetAllProjects,
  GetProjectById,
};

module.exports = projectServices;
