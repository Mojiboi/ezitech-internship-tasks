const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.urlencoded({extended: false})); // Parse form data

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Example POST route
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
