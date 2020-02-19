const mongoose = require('mongoose');

const ServerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
        trim: true
    },

    ip: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },

    login: {
        type: Boolean,
        required: false,
    },

    software: {
        type: String,
        value: [String],
        required: false,
    },

    description: {
        type: String,
        required: false,
        trim: true
    },

    deleteFlag:{
        type: Boolean,
        required: true,
        default: false
    }
});


module.exports = mongoose.model('Server', ServerSchema);
