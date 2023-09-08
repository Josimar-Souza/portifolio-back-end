const { Router } = require('express');
const AddProject = require('./addProject');
const GetAllProjects = require('./getAllProjects');
const GetProjectById = require('./getProjectById');

const projectsRouter = Router({ mergeParams: true });

projectsRouter.post('/projects', AddProject);
projectsRouter.get('/projects', GetAllProjects);
projectsRouter.get('/projects/:id', GetProjectById);

module.exports = (rootRouter) => {
  rootRouter.use(projectsRouter);
};
