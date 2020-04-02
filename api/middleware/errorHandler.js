const ErrorRes = require('../utilities/errorResponse');
const errorHandler = (err, req, res, next) => {
  // Create a copy of err to generalize message
  let error = { ...err };

  // Log to console the error in red for developer
  console.log(err.stack.yellow);

  // Different types of Mongoose Error Handling
  if (err.name == 'CastError') {
    const message = `Designer not found with the id of ${error.value}`;
    error = new ErrorRes(message, 404);
  }
  // if no status code default to 500
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
