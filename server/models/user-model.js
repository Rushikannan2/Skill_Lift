const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Fixed typo: 'require' -> 'required'
    },
    email: {
        type: String,
        required: true, // Fixed typo
    },
    phone: {
        type: String,
        required: true, // Fixed typo
    },
    password: {
        type: String,
        required: true, // Fixed typo
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
