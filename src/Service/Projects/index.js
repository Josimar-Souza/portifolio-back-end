const AddProject = require('./addProject');
const GetAllProjects = require('./getAllProjects');
const GetProjectById = require('./getProjectById');
const DeleteProjectById = require('./deleteProjectById');

const projectServices = {
  AddProject,
  GetAllProjects,
  GetProjectById,
  DeleteProjectById,
};

module.exports = projectServices;
