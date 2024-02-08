// routes/questionRoutes.js

const express = require('express');
const router = express.Router();
const { generateQuestion } = require('../controllers/questionController');

// Route for generating questions
router.post('/generate', generateQuestion);

module.exports = router;
