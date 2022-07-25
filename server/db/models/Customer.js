const mongoose = require('mongoose');
const validator = require('validator');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    required: [true, 'PLease provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone number'],
    trim: true,
  },
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;
