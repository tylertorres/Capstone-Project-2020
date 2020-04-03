const mongoose = require('mongoose');

const DesignerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a valid password'],
    minlength: 6,
    select: false
  },
  profilePicture: {
    type: String,
    default: 'no-picture.jpg'
  },
  aboutMe: {
    type: String,
    default: 'Add something about yourself'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'inactive']
  },
  totalRating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  reviews: {
    type: Array,
    default: []
  },
  portfolio: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('Designer', DesignerSchema);
