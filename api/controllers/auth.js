const User = require('../models/User');
const asyncHandler = require('../middleware/async');

// @info Register a user
// @route /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
