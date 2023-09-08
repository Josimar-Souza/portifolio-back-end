const AddProject = require('./addProject');
const GetAllProjects = require('./getAllProjects');
const GetProjectById = require('./getProjectById');
const DeleteProjectById = require('./deleteProjectById');
const UpdateProjectById = require('./updateProjectById');

const projectModels = {
  AddProject,
  GetAllProjects,
  GetProjectById,
  DeleteProjectById,
  UpdateProjectById,
};

module.exports = projectModels;
