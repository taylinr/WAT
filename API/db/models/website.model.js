const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },

    domains: {
        type: [String],
        required: false,
    },

    createDate: {
        type: Date,
        required: false,
    },

    expirationDate: {
        type: Date,
        required: false,
    },

    hostedIntern: {
        type: Boolean,
        required: false,
    },

    wpVersion: {
        type: String,
        required: false,
    },

    wpAutoUpdate: {
        type: Boolean,
        default: false
    },

    _serverID:{
        type: mongoose.Types.ObjectId,
        required: true
    },

    deleteFlag:{
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Website', WebsiteSchema)
