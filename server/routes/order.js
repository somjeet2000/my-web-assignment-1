const express = require('express');
const Orders = require('../models/Orders');
const router = express.Router();

// Route 1: Create Order using POST: /api/v1/order/create_order.
router.post('/create_order', async (request, response) => {
  try {
    const { userName, orderStatus, costOfOrder, actualCost, feedback, rating } =
      request.body;

    // Generate the random Order ID
    let orderIDGenerate = Math.floor(100000 + Math.random() * 900000);

    const orderCreate = await Orders.create({
      userName: userName,
      orderID: orderIDGenerate,
      orderStatus: orderStatus,
      costOfOrder: costOfOrder,
      actualCost: actualCost,
      netProfit: costOfOrder - actualCost,
      feedback: feedback,
      rating: rating,
    });

    response.status(200).json(orderCreate);
  } catch (error) {
    return response
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

// Route 2: Get the Details of all the Orders available in Database. GET: /api/v1/order/get_order_details.
router.get('/get_order_details', async (request, response) => {
  try {
    const orderDetails = await Orders.find({});
    response.status(200).json(orderDetails);
  } catch (error) {
    return response
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;
