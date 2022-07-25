const express = require('express');
const {
  getAllSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require('../controllers/SupplierController');

const Router = express.Router();

Router.route('/').get(getAllSuppliers).post(createSupplier);

Router.route('/:id')
  .get(getSupplier)
  .patch(updateSupplier)
  .delete(deleteSupplier);

module.exports = Router;
