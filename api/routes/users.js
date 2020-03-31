const express = require('express');
const router = express.Router();
// methods to be added later
const {
  getDesigners,
  getDesigner,
  updateUser,
  deleteUser
} = require('../controllers/users');

router.route('/').get(getDesigners);

router
  .route('/:id')
  .get(getDesigner)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
