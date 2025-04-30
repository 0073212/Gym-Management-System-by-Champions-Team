const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Load env vars
dotenv.config();

// DB Connection
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS
app.use(helmet()); // Security headers
app.use(morgan('combined')); // Logging

// API Routes
app.use('/api/auth', authRoutes);

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve multi-page frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Optional: 404 page
app.use((req, res) => {
    res.status(404).send('404 - Page not found');
  });  

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});


