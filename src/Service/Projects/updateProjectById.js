const { StatusCodes } = require('http-status-codes');

const projectsModels = require('../../Model/projects');
const CustomError = require('../../helpers/CustomError');
const projectsValidations = require('./validation');
const projectModels = require('../../Model/projects');

const UpdateProjectById = async (id, newValues) => {
  const projectToUpdate = await projectsModels.GetProjectById(id);

  if (!projectToUpdate) {
    const error = new CustomError(null, 'Projeto não encontrado!', StatusCodes.NOT_FOUND);
    return error;
  }

  const validation = projectsValidations.UpdateProjectValidation(newValues);

  if ('error' in validation) {
    const error = new CustomError(validation, validation.error.message, StatusCodes.BAD_REQUEST);
    return error;
  }

  const updatedProject = await projectModels.UpdateProjectById(id, newValues);

  return updatedProject;
};

module.exports = UpdateProjectById;
