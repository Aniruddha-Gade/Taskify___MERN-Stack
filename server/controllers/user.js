const User = require("../models/user");

exports.getUserDetails = async (req, res) => {
    try {
        // const userId = req.user.id;
        const { id } = req.user;

        const userDetails = await User.findById(id).populate('todos');

        res.status(200).json({
            sucess: true,
            message: 'User details fetch successfully',
            data: userDetails
        })
    } catch (error) {
        console.error('Error while fetching user details => ', error);
        res.status(500).json({
            success: false,
            message: 'Error while fetching user details',
            error: error.message,
        });
    }
}