const { StatusCodes } = require('http-status-codes');

const projectsServices = require('../../Service/Projects');
const CustomError = require('../../helpers/CustomError');

const DeleteProjectsById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const hasDeleted = await projectsServices.DeleteProjectById(id);

    if (hasDeleted instanceof CustomError) {
      return res.status(hasDeleted.status).json({ message: hasDeleted.message });
    }

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (e) {
    next(e);
  }
};

module.exports = DeleteProjectsById;
