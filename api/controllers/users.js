const express = require('express');
const User = require('../models/User');
const ErrorRes = require('../utilities/errorResponse');

// @info      Load certain amount of designers onto home page of NID
// @route     GET /api/v1/users
// @access    Private
exports.getDesigners = async (req, res, next) => {
  const data = await User.findOne({ email: 'blah@gmail.com' });
  res.send(data);
};

exports.getDesigner = async (req, res, next) => {
  try {
    const designer = await User.findById(req.params.id);

    if (!designer) {
      return next(new ErrorRes('Designer not found', 404));
    }

    res.status(200).json({ designer });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = (req, res, next) => {
  res.status(400).json({
    success: true,
    msg: `Looking at ${req.params.id}`
  });
};

exports.deleteUser = (req, res, next) => {
  res.status(400).json({
    success: true,
    msg: `Looking at ${req.params.id}`
  });
};
