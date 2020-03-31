const errorHandler = (err, req, res, next) => {
  // Log to console the error in red for developer
  console.log(err.stack.yellow);

  res.status(500).json({
    success: false,
    error: err.message
  });
};

module.exports = errorHandler;
