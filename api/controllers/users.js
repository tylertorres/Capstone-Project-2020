const express = require('express');
const User = require('../models/User');

// @info      Load certain amount of designers onto home page of NID
// @route     GET /api/v1/users
// @access    Private
exports.getDesigners = async (req, res, next) => {
  const data = await User.findOne({ email: 'blah@gmail.com' });
  res.send(data);
};

exports.getDesigner = (req, res, next) => {
  res.status(400).json({
    success: true,
    msg: `Looking at ${req.params.id}`
  });
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
