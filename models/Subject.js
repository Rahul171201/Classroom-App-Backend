const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    id : {
        type: String,
        required: true,
        unique: true
    },
    assignments : {
        type: Array,
        default: []
    }
}, {timestamps: true});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;