const express = require('express');
const router = express.Router();

// Controllers
const {
    signup,
    sendOTP,
    login,
    changePassword
} = require('../controllers/auth');




// Route for user signup
router.post('/signup', signup);

// Route for sending OTP to the user's email
router.post('/sendotp', sendOTP);

// Route for user login
router.post('/login', login);

// Route for change password
router.post('/changePassword', changePassword);


module.exports = router
