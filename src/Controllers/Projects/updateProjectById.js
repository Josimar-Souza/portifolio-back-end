const { StatusCodes } = require('http-status-codes');

const projectsServices = require('../../Service/Projects');
const CustomError = require('../../helpers/CustomError');

const UpdateProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedProject = await projectsServices.UpdateProjectById(id, req.body);

    if (updatedProject instanceof CustomError) {
      return res.status(updatedProject.status).json({ message: updatedProject.message });
    }

    if (typeof (updatedProject) === 'string') {
      return res.status(StatusCodes.OK).json({ message: updatedProject });
    }

    return res.status(StatusCodes.OK).json({ updatedProject });
  } catch (e) {
    next(e);
  }
};

module.exports = UpdateProjectById;
