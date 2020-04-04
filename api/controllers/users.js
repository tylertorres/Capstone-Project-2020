const express = require('express');
const User = require('../models/User');
const ErrorRes = require('../utilities/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const Designer = require('../models/Designer');

// @info      Load certain amount of designers onto home page of NID
// @route     GET /api/v1/users
// @access    Private
exports.getDesigners = asyncHandler(async (req, res, next) => {
  const designers = await User.aggregate([{ $sample: { size: 5 } }]);
  if (!designers) {
    return next(new ErrorRes('Designers not found', 404));
  }
  res.status(200).json({ data: designers });
});

// @info      View a designer's profile
// @route     GET /api/v1/users/:id
// @access    Private
exports.getDesigner = asyncHandler(async (req, res, next) => {
  const designer = await Designer.findById(req.params.id);

  if (!designer) {
    return next(new ErrorRes('Designer not found', 404));
  }

  res.status(200).json({ success: true, data: designer });
});

// @info      Update a user's description and profile picture
// @route     GET /api/v1/users/:id/description
// @access    Private
exports.updateUserDescription = asyncHandler(async (req, res, next) => {
  const { description } = req.body;

  if (!description) {
    return next(new ErrorRes('Description not found', 404));
  }

  await User.findByIdAndUpdate(req.params.id, {
    aboutMe: description
  });

  res.status(200).json({
    success: true,
    msg: 'Description updated successfully'
  });
});
