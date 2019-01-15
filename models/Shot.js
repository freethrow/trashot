const mongoose = require("mongoose");

const ShotSchema = new mongoose.Schema({
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

const Shot = mongoose.model('Shot', ShotSchema);

module.exports = Shot;

