const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to World's best learning and developing platform using router");
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }
};

const register = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { username, email, phone, password } = req.body;

        // Check if the user already exists
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // Create a new user
        const userCreated = await User.create({ username, email, phone, password });

        // Respond with the newly created user data
        res.status(200).json({ msg : userCreated });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = { home, register };
