const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const connectDB = require('./db/connect');
require('dotenv').config();

//import router
const productRouter = require('./routes/ProductRouter');
const customerRouter = require('./routes/CustomerRouter');
const orderRouter = require('./routes/OrderRouter');
const supplierRouter = require('./routes/SupplierRouter');

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api/v1/products', productRouter);
app.use('/api/v1/customers', customerRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/suppliers', supplierRouter);

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connection to DB Successful');
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
