const mongoose = require('mongoose');

const WpUserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    mail: {
        type: String,
        required: true,
        trim: true
    },

    _websiteID:{
        type: [mongoose.Types.ObjectId],
        required: false
    },

    deleteFlag:{
        type: Boolean,
        required: true,
        default: false
    }
});


module.exports = mongoose.model('WpUser', WpUserSchema);
