const express = require('express');

// @info      Load certain amount of designers onto home page of NID
// @route     GET /api/v1/users
// @access    Private
exports.getDesigners = (req, res, next) => {
  res
    .status(400)
    .json({ success: true, msg: 'Acquired designers successfully' });
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
