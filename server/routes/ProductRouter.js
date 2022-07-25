const express = require('express');
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/ProductController');

const Router = express.Router();

Router.route('/').get(getAllProducts).post(createProduct);

Router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = Router;
