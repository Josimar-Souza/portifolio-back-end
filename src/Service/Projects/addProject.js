const { StatusCodes } = require('http-status-codes');

const projectModels = require('../../Model/projects');
const projectValidations = require('./validation');
const CustomError = require('../../helpers/CustomError');

const AddProject = async (newProject) => {
  const validation = projectValidations.AddProjectValidation(newProject);

  if ('error' in validation) {
    const error = new CustomError(validation, validation.error.message, StatusCodes.BAD_REQUEST);

    return error;
  }

  const projectAdded = await projectModels.AddProject(newProject);

  return projectAdded;
};

module.exports = AddProject;
