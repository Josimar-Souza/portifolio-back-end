const { Router } = require('express');
const AddProject = require('./addProject');

const projectsRouter = Router({ mergeParams: true });

projectsRouter.post('/projects', AddProject);

module.exports = (rootRouter) => {
  rootRouter.use(projectsRouter);
};
