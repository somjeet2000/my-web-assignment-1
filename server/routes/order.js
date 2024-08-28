const express = require('express');
const router = express.Router();

// Route 1: Create Order using POST: /api/v1/order/create_order.
router.post('/create_order', (request, response) => {
  try {
    const {
      userName,
      orderID,
      orderStatus,
      costOfOrder,
      actualCost,
      netProfit,
      feedback,
      rating,
    } = request.body;
  } catch (error) {
    return response
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;
