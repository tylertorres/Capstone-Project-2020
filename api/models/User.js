const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
  role: {
    type: String,
    enum: ['user', 'designer'],
    default: 'user'
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
  }
});

module.exports = mongoose.model('User', UserSchema);
