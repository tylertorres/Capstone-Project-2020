const express = require('express');
const router = express.Router();
const {
  getDesigners,
  getDesigner,
  updateUserDescription
} = require('../controllers/users');

router.route('/').get(getDesigners);

router.route('/:id').get(getDesigner);

router.route('/:id/description').put(updateUserDescription);

module.exports = router;
