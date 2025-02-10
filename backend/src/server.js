const express = require('express');
const cors = require('cors');
const analyzeRoute = require('./routes/analyze');

const PORT = process.env.PORT || 5001;  // Change 5000 to 5001
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.use(cors());
app.use(express.json());

app.use('/analyze', analyzeRoute);

app.listen(PORT, () => console.log("Server running on port " + PORT));