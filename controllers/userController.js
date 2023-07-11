const userModel = require('../models/userModel');


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email, password })
        if (!user) {
            return res.status(400).send('User Not Found')
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        })
    }
};

const registerController = async (req, res) => {
    try {
        console.log('registercontroller being hit 1')
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({
            success: true,
            newUser,
        });
        console.log('registercontroller being hit 2')
    } catch (error) {
        console.log('registercontroller being hit 3')
        res.status(400).json({
            success: false,
            error
        })
    }
};


module.exports = { loginController, registerController };