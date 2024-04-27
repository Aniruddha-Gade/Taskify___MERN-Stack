const express = require('express');
const router = express.Router();

// Controllers
const {
    signup,
    sendOTP
} = require('../controllers/auth');




// Route for user signup
router.post('/signup', signup);

// Route for sending OTP to the user's email
router.post('/sendotp', sendOTP);




module.exports = router
