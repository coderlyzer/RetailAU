const Customer = require('../db/models/Customer');

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json({ customers });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getCustomer = (req, res) => {
  res.send('Customer list');
};

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json({ customer });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateCustomer = (req, res) => {
  res.send('Customer updated');
};

const deleteCustomer = (req, res) => {
  res.send('Customer deleted');
};

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
