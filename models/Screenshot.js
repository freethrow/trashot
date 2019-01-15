const mongoose = require("mongoose");

const ScreenshotSchema = new mongoose.Schema({
    site:{
        type: String,
        required: true
    },

    siteUrl:{
        type: String,
        required: true
    },

    url:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

const Screenshot = mongoose.model('Screenshot', ScreenshotSchema);

module.exports = Screenshot;

