const { StatusCodes } = require('http-status-codes');

const projectServices = require('../../Service/Projects');
const CustomError = require('../../helpers/CustomError');

const AddProject = async (req, res, next) => {
  let projectAdded;

  try {
    projectAdded = await projectServices.AddProject(req.body);

    if (projectAdded instanceof CustomError) {
      return res.status(projectAdded.status).json({ message: projectAdded.message });
    }

    return res.status(StatusCodes.CREATED).json({ projectAdded });
  } catch (e) {
    next(e);
  }
};

module.exports = AddProject;
