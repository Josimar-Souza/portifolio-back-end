const projectsModels = require('../../Model/projects');

const GetAllProjects = async () => {
  const projects = await projectsModels.GetAllProjects();

  return projects;
};

module.exports = GetAllProjects;
