const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  images: {
    type: [Image]
  },
  description: {
    type: String,
    maxlength: 240
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Image', ImageSchema);
