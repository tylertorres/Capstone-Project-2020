const User = require('../models/User');
const asyncHandler = require('../middleware/async');

// @info Register a user
// @route /api/v1/auth/register
// @access Public

exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    role
  });

  res.status(200).json({ success: true, newUser });
});

// @info Login a user
// @route /api/v1/auth/login
// @access Public
exports.login = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @info Logout a user
// @route /api/v1/auth/logout
// @access Private
exports.login = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
