const User = require('./../models/user');
const Profile = require('./../models/profile');
const OTP = require('../models/OTP')
const bcrypt = require('bcrypt');
require('dotenv').config();





// ================ SIGNUP ================
exports.signup = async (req, res) => {
    try {
        // extract data 
        const { firstName, lastName, email, password, confirmPassword,
            contactNumber, otp } = req.body;

        // validation
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(401).json({
                success: false,
                message: 'All fields are required..!'
            });
        }

        // check both pass matches or not
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                messgae: 'passowrd & confirm password does not match, Please match it..!'
            });
        }

        // check user have registered already
        const checkUserAlreadyExits = await User.findOne({ email });

        // if yes ,then say to login
        if (checkUserAlreadyExits) {
            return res.status(400).json({
                success: false,
                message: 'User registered already, go to Login Page'
            });
        }

        // find most recent otp stored for user in DB
        const recentOtp = await OTP.findOne({ email }).sort({ createdAt: -1 }).limit(1);
        // console.log('recentOtp ', recentOtp)

        // .sort({ createdAt: -1 }): 
        // It's used to sort the results based on the createdAt field in descending order (-1 means descending). 
        // This way, the most recently created OTP will be returned first.

        // .limit(1): It limits the number of documents returned to 1. 


        // if otp not found
        if (!recentOtp || recentOtp.length == 0) {
            return res.status(400).json({
                success: false,
                message: 'Otp not found in DB, please try again'
            });
        } else if (otp !== recentOtp.otp) {
            // otp invalid
            return res.status(400).json({
                success: false,
                message: 'Invalid Otp'
            })
        }

        // hash - secure passoword
        let hashedPassword = await bcrypt.hash(password, 10);

        // additionDetails
        const profileDetails = await Profile.create({
            gender: null, dateOfBirth: null, about: null, contactNumber: null
        });


        // create entry in DB
        const userData = await User.create({
            firstName, lastName, email, password: hashedPassword, contactNumber,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        });

        // return success message
        res.status(200).json({
            success: true,
            message: 'User Registered Successfully'
        });
    }

    catch (error) {
        console.log('Error while registering user (signup)');
        console.log(error)
        res.status(401).json({
            success: false,
            error: error.message,
            messgae: 'User cannot be registered , Please try again..!'
        })
    }
}
