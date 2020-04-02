const express = require('express');
const User = require('../models/User');
const ErrorRes = require('../utilities/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// @info      Load certain amount of designers onto home page of NID
// @route     GET /api/v1/users
// @access    Private
exports.getDesigners = asyncHandler(async (req, res, next) => {
  const designers = await User.aggregate([{ $sample: { size: 5 } }]);
  res.status(200).json({ data: designers });
});

exports.getDesigner = asyncHandler(async (req, res, next) => {
  const designer = await User.findById(req.params.id);

  if (!designer) {
    return next(new ErrorRes('Designer not found', 404));
  }

  res.status(200).json({ designer });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  res.status(400).json({
    success: true,
    msg: `Looking at ${req.params.id}`
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  res.status(400).json({
    success: true,
    msg: `Looking at ${req.params.id}`
  });
});
