const express = require('express');
const { OpenAI } = require('openai');
const router = express.Router();
const pool = require('../db');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/generate', async (req, res) => {
    try {
        const { product, targetAudience} = req.body;
        const prompt = `Създай рекламно съобщение за продукт: ${product} насочено към ${targetAudience}.`;

        const response = await openai.complete({
            model: 'gpt-4',
            prompt: prompt,
            maxTokens: 50
        });

        res.json( { adText: response.choices[0].text.trim() } );
        
    } catch (error) {
        res.status(500).json({ error: 'Error generating ad text' });
    }

});

router.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving users' });
    }
});

module.exports = router;