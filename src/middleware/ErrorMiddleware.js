const { StatusCodes } = require('http-status-codes');

const ErrorMiddleware = (error, req, res, next) => {
  console.log(error);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
};

module.exports = ErrorMiddleware;
