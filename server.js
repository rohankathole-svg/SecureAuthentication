// server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const db = require('./config/db');  // Import the db connection (pool)

// Import routes
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.json());

// Authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
