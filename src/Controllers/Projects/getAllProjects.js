const { StatusCodes } = require('http-status-codes');

const projectsServices = require('../../Service/Projects');

const GetAllProjects = async (req, res, next) => {
  try {
    const projects = await projectsServices.GetAllProjects();

    return res.status(StatusCodes.OK).json({ projects });
  } catch (e) {
    next(e);
  }
};

module.exports = GetAllProjects;
