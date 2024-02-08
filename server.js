// server.js

const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
const db = require('./db');
db();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
