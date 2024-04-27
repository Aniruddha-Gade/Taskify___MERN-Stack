const express = require('express');
const router = express.Router();

// Controllers
const {
    signup,

} = require('../controllers/auth');




// Route for user signup
router.post('/signup', signup);






module.exports = router
