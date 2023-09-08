const { Router } = require('express');
const AddProject = require('./addProject');
const GetAllProjects = require('./getAllProjects');
const GetProjectById = require('./getProjectById');
const DeleteProjectsById = require('./deleteProjectById');
const UpdateProjectById = require('./updateProjectById');

const projectsRouter = Router({ mergeParams: true });

projectsRouter.post('/projects', AddProject);
projectsRouter.get('/projects', GetAllProjects);
projectsRouter.get('/projects/:id', GetProjectById);
projectsRouter.delete('/projects/:id', DeleteProjectsById);
projectsRouter.put('/projects/:id', UpdateProjectById);

module.exports = (rootRouter) => {
  rootRouter.use(projectsRouter);
};
