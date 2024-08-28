const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  userName: 'String',
  orderID: 'Number',
  orderStatus: 'String',
  costOfOrder: 'Number',
  actualCost: 'Number',
  netProfit: 'Number',
  date: {
    type: 'Date',
    default: Date.now,
  },
  feedback: 'String',
  rating: 'Number',
});

module.exports = mongoose.model('Order', orderSchema);
