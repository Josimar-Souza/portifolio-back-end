const { StatusCodes } = require('http-status-codes');

const projectsModels = require('../../Model/projects');
const CustomError = require('../../helpers/CustomError');

const DeleteProjectById = async (id) => {
  const project = await projectsModels.GetProjectById(id);

  if (!project) {
    const error = new CustomError(null, 'Projeto não encontrado!', StatusCodes.NOT_FOUND);

    return error;
  }

  const hasDeleted = await projectsModels.DeleteProjectById(id);

  return hasDeleted;
};

module.exports = DeleteProjectById;
