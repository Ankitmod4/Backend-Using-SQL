const { where } = require('sequelize');
const ChatApp = require('./Model');

exports.Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        console.log("Login Request:", Email, Password);

        if (!Email || !Password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required",
            });
        }

        // Find user by email
        const data = await ChatApp.findOne({ where: { Email } });

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Email Not Found. Please Signup first",
            });
        }

        // Check password
        if (data.Password !== Password) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password",
            });
        }

        // Successful login
        return res.status(200).json({
            success: true,
            data: data,
            message: "Login Successfully",
        });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error: " + error.message,
        });
    }
};
