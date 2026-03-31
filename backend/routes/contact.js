const express = require('express');
const router = express.Router();

const messages = [];

// POST contact message
router.post('/', (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, message: 'Name and message are required.' });
  }

  const entry = {
    id: `MSG-${Date.now()}`,
    name, phone, email, message,
    createdAt: new Date().toISOString()
  };

  messages.push(entry);

  res.status(201).json({
    success: true,
    message: 'Message received! We will get back to you soon.',
    data: entry
  });
});

module.exports = router;
