const express = require('express');
const router = express.Router();

// Controllers
const {
    signup,
    sendOTP,
    login
} = require('../controllers/auth');




// Route for user signup
router.post('/signup', signup);

// Route for sending OTP to the user's email
router.post('/sendotp', sendOTP);

// Route for user login
router.post('/login', login);



module.exports = router
