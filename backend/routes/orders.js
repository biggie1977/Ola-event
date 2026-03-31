const express = require('express');
const router = express.Router();

const orders = [];

// POST create order
router.post('/', (req, res) => {
  const { customerName, phone, items, deliveryAddress, message } = req.body;

  if (!customerName || !phone || !items || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Please provide customer name, phone and items.' });
  }

  const order = {
    id: `OLA-${Date.now()}`,
    customerName,
    phone,
    items,
    deliveryAddress: deliveryAddress || '',
    message: message || '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  orders.push(order);

  res.status(201).json({
    success: true,
    message: 'Order received! We will contact you shortly.',
    orderId: order.id,
    data: order
  });
});

// GET all orders (admin)
router.get('/', (req, res) => {
  res.json({ success: true, data: orders, count: orders.length });
});

module.exports = router;
