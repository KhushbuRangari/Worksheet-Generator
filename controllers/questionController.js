// controllers/questionController.js

// Assuming you have imported the necessary modules
const { generateQuestions } = require('../ai');

// Controller function to handle question generation
const generateQuestion = async (req, res) => {
    try {
        const { context } = req.body;
        
        // Generate questions using AI model
        const generatedQuestions = await generateQuestions(context);

        res.status(200).json({ questions: generatedQuestions });
    } catch (error) {
        console.error('Error generating questions:', error);
        res.status(500).json({ message: 'Error generating questions' });
    }
};

module.exports = { generateQuestion };
