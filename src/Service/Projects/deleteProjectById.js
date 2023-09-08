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

  if (hasDeleted.deletedCount === 0) {
    const error = new CustomError(null, 'Não foi possível deletar esse projeto, por favor, tente novamente mais tarde!');
    return error;
  }

  return hasDeleted;
};

module.exports = DeleteProjectById;
