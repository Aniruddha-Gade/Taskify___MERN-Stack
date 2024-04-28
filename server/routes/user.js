const express = require('express');
const router = express.Router();

// Controllers
const {
    signup,
    sendOTP,
    login,
    changePassword
} = require('../controllers/auth');
const { getUserDetails, deleteAccount } = require('../controllers/user');
const { auth } = require('../middleware/auth');




// Route for user signup
router.post('/signup', signup);

// Route for sending OTP to the user's email
router.post('/sendotp', sendOTP);

// Route for user login
router.post('/login', login);

// Route for change password
router.post('/changePassword', changePassword);

// Route for User Details
router.post('/user-details', auth, getUserDetails);

// Route for Delete Account
router.delete('/delete-account', auth, deleteAccount);

module.exports = router
