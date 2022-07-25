const Order = require('../db/models/Order');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOrder = (req, res) => {
  res.send('Order list');
};

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateOrder = (req, res) => {
  res.send('Order updated');
};

const deleteOrder = (req, res) => {
  res.send('Order deleted');
};

module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
