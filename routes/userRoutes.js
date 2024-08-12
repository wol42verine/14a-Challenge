const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Serve the registration form
router.get('/register', (req, res) => {
  res.render('register');
});

// Handle user registration
router.post('/register', authController.registerUser);

// Serve the login form
router.get('/login', (req, res) => {
  res.render('login');
});

// Handle user login
router.post('/login', authController.loginUser);

module.exports = router;