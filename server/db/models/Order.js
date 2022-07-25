const mongoose = require('mongoose');
const ProductModel = require('../models/Product');

const OrderSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: 'Customer',
      required: [true, 'Order must belong to a customer.'],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Order must belong to a product.'],
    },
    supplier: {
      type: mongoose.Schema.ObjectId,
      ref: 'Supplier',
      required: [true, 'Order must belong to a supplier.'],
    },
  },
  //Allows for calculated data that's not on the model to show
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

OrderSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'product',
    select: 'sku name stock cost department',
  }).populate({
    path: 'supplier',
    select: 'name',
  });
  next();
});

//Static methods to count the number of orders
OrderSchema.statics.calcTotalOrders = async function (productId) {
  const stats = await this.aggregate([
    //Select all the orders that belong to the productId thats passed as arg above
    {
      $match: { product: productId },
    },
    {
      $group: {
        _id: '$product',
        orderQty: { $sum: 1 },
        restock: { $sum: 2 },
      },
    },
  ]);
  console.log(stats);
  //update the order quantity and the reorder inside the product model
  await ProductModel.findByIdAndUpdate(productId, {
    orderQty: stats[0].orderQty,
    reorder: stats[0].restock,
  });
};

OrderSchema.pre('save', function (next) {
  //this points to current review
  this.constructor.calcTotalOrders(this.product);
  next();
});

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;
