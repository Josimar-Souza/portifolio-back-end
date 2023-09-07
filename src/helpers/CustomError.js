class CustomError {
  constructor(error, message, status) {
    this.error = error;
    this.message = message;
    this.status = status;
  }
}

module.exports = CustomError;
