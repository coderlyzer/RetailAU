const mongoose = require('mongoose');
const validator = require('validator');

const SupplierSchema = new mongoose.Schema({
  name: {
    type: String,
    mrequired: [true, 'Please tell us your name!'],
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

const SupplierModel = mongoose.model('Supplier', SupplierSchema);

module.exports = SupplierModel;
