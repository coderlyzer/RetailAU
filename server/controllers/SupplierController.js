const Supplier = require('../db/models/Supplier');

const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find({});
    res.status(200).json({ suppliers });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSupplier = (req, res) => {
  res.send('Supplier list');
};

const createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json({ supplier });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateSupplier = (req, res) => {
  res.send('Supplier updated');
};

const deleteSupplier = (req, res) => {
  res.send('Supplier deleted');
};

module.exports = {
  getAllSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
