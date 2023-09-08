const AddProject = require('./addProject');
const GetAllProjects = require('./getAllProjects');
const GetProjectById = require('./getProjectById');
const DeleteProjectById = require('./deleteProjectById');

const projectModels = {
  AddProject,
  GetAllProjects,
  GetProjectById,
  DeleteProjectById,
};

module.exports = projectModels;
