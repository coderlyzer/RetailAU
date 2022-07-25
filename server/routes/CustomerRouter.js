const express = require('express');
const {
  getAllCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/CustomerController');

const Router = express.Router();

Router.route('/').get(getAllCustomers).post(createCustomer);

Router.route('/:id')
  .get(getCustomer)
  .patch(updateCustomer)
  .delete(deleteCustomer);

module.exports = Router;
