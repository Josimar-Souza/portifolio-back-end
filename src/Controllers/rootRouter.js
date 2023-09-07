const { Router } = require('express');
const projectsRouter = require('./Projects/projectsRouter');

const rootRouter = Router({ mergeParams: true });

projectsRouter(rootRouter);

module.exports = (app) => {
  app.use(rootRouter);
};
