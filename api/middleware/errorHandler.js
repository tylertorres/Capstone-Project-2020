const ErrorRes = require('../utilities/errorResponse');

const errorHandler = (err, req, res, next) => {
  // Create a copy of err to generalize message
  let error = { ...err };

  // Log to console the error in red for developer
  console.log(err.stack.yellow);
  console.log(error);
  // Different types of Mongoose Error Handling
  if (err.name == 'CastError') {
    const message = `Designer not found with the id of ${error.value}`;
    error = new ErrorRes(message, 404);
  }

  // check for duplicate mongoose key ; validation
  if (error.code == 11000) {
    const message = 'Duplicate value entered, try again';
    error = new ErrorRes(message, 400);
  }

  // check for validation errors, relating to Model error checking ; validation
  if (error.name == 'ValidationError') {
    const message = Object.values(error.errors).map(val => val.message);
    error = new ErrorRes(message, 400);
  }

  // if no status code default to 500
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
