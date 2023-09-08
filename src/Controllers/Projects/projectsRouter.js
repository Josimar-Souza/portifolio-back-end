const { Router } = require('express');
const AddProject = require('./addProject');
const GetAllProjects = require('./getAllProjects');

const projectsRouter = Router({ mergeParams: true });

projectsRouter.post('/projects', AddProject);
projectsRouter.get('/projects', GetAllProjects);

module.exports = (rootRouter) => {
  rootRouter.use(projectsRouter);
};
