const Product = require('../db/models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getProduct = (req, res) => {
  res.send('Product list');
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateProduct = (req, res) => {
  res.send('Product updated');
};

const deleteProduct = (req, res) => {
  res.send('Product deleted');
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
