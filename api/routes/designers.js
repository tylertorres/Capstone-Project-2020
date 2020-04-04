const express = require('express');
const router = express.Router();
const {
  getDesigners,
  getDesigner,
  updateDesigner
} = require('../controllers/users');

router.route('/').get(getDesigners);

router
  .route('/:id')
  .get(getDesigner)
  .put(updateDesigner);

module.exports = router;
