const { StatusCodes } = require('http-status-codes');

const projectsServices = require('../../Service/Projects');
const CustomError = require('../../helpers/CustomError');

const GetProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await projectsServices.GetProjectById(id);

    if (project instanceof CustomError) {
      return res.status(project.status).json({ message: project.message });
    }

    return res.status(StatusCodes.OK).json({ project });
  } catch (e) {
    next(e);
  }
};

module.exports = GetProjectById;
