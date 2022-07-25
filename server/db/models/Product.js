const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    sku: {
      type: Number,
      required: [true, 'a product must have a sku'],
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'a product must have a name'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'a product must have a description'],
      trim: true,
    },
    reorder: {
      type: Number,
      // required: [true, 'a product must have a reorder'],
      trim: true,
      default: 0,
    },
    stock: {
      type: Number,
      required: [true, 'a product must have a stock'],
      trim: true,
      default: 0,
    },
    orderQty: {
      type: Number,
      default: 0,
    },
    cost: {
      type: Number,
      required: [true, 'a product must have a cost'],
      trim: true,
    },
    department: {
      type: String,
      required: [true, 'a product must have a department'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'a product must have a price'],
      trim: true,
    },
  },
  //Allows for calculated data that's not on the model to show
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//virtual populate to get the order count from Order Model without dealing with relationships
// ProductSchema.virtual('orders', {
//   ref: 'OrderModel',
//Attribute inside Order.js in the foreign model
// foreignField: 'product',
//Attribute in the local model
// localField: '_id',
// });

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
