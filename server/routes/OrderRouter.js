const express = require('express');
const {
  getAllOrders,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/OrderController');

const Router = express.Router();

Router.route('/').get(getAllOrders).post(createOrder);

Router.route('/:id').get(getOrder).patch(updateOrder).delete(deleteOrder);

module.exports = Router;
