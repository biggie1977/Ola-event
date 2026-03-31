const express = require('express');
const router = express.Router();
const products = require('../products-data');

// GET all products
router.get('/', (req, res) => {
  const { category, featured } = req.query;
  let result = [...products];

  if (category) result = result.filter(p => p.category === category);
  if (featured === 'true') result = result.filter(p => p.featured);

  res.json({ success: true, data: result, count: result.length });
});

// GET single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, data: product });
});

module.exports = router;
