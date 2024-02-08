// routes/auth.js

const express = require('express');
const router = express.Router();
const generateWorksheet = require('../ai');

// Worksheet generation route
router.post('/generate-worksheet', async (req, res) => {
  try {
    const { input } = req.body;

    // Generate worksheet using AI
    const worksheet = await generateWorksheet(input);

    res.status(200).json({ worksheet });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
