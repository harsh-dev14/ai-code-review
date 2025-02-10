const axios = require('axios');

exports.analyzeCode = async (req, res) => {
    const { code } = req.body;
    try {
        const response = await axios.post('http://localhost:8000/analyze', { code });
        res.json({ analysis: response.data.analysis });
    } catch (error) {
        res.status(500).json({ error: 'Failed to analyze code' });
    }
};