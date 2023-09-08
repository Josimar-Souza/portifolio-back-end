const joi = require('joi');

const validationScheme = joi.object({
  projectName: joi.string()
    .min(5)
    .max(60)
    .messages({
      'string.empty': 'O nome do projeto não pode estar vazio',
      'string.min': 'O nome do projeto deve conter no mínimo 5 caracteres',
      'string.max': 'O nome do projeto deve conter no máximo 60 caracteres',
    }),
  projectDescription: joi.string()
    .min(15)
    .max(600)
    .messages({
      'string.empty': 'A descrição do projeto não pode estar vazia',
      'string.min': 'A descrição do projeto deve conter no mínimo 15 caracteres',
      'string.max': 'A descrição do projeto deve conter no máximo 600 caracteres',
    }),
  deployedUrl: joi.string()
    .uri()
    .messages({
      'string.empty': 'A url onde o projeto foi publicado não pode estar vazia',
      'string.uri': 'A url onde o projeto foi publicado deve ser válida',
    }),
  githubUrl: joi.string()
    .uri()
    .messages({
      'string.empty': 'A url do github não pode estar vazia',
      'string.uri': 'A url do projeto no github deve ser válida',
    }),
  imageUrl: joi.string()
    .uri()
    .messages({
      'string.empty': 'A url da imagem do projeto não pode estar vazia',
      'string.uri': 'A url da imagem do projeto deve ser válida',
    }),
  pinned: joi.bool(),
});

module.exports = (value) => validationScheme.validate(value);
