const errorHandler = (err, req, res, next) => {
  // Log to console the error in red for developer
  console.log(err.stack.red);

  res.status(500).json({
    success: false,
    error: err.message
  });
};
