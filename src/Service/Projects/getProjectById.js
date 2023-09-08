const { StatusCodes } = require('http-status-codes');

const projectsModels = require('../../Model/projects');
const CustomError = require('../../helpers/CustomError');

const GetProjectById = async (id) => {
  const project = await projectsModels.GetProjectById(id);

  if (!project) {
    const error = new CustomError(null, 'Projeto não encontrado!', StatusCodes.NOT_FOUND);

    return error;
  }

  return project;
};

module.exports = GetProjectById;
