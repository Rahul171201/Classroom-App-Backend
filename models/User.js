const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 30,
        unique: true
    },
    loginType : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    email: {
        type: String,
        unique: true
    },
    userId: {
        type: String
    },
    subjects: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;