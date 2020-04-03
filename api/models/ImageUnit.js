const mongoose = require('mongoose');

const ImageUnitSchema = new mongoose.Schema({
  image: {
    type: Image
  },
  description: {
    type: String,
    maxlength: 240
  },
  designer: {
    type: mongoose.Schema.ObjectId,
    ref: 'Designer'
  }
});

module.exports = mongoose.model('ImageUnit', ImageUnitSchema);
