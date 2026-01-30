const mongoose = require('mongoose');
const { unique } = require('next/dist/build/utils');
const { redirect } = require('next/dist/server/api-utils');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: {type: Number }}],
},
{timestamps: true}
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;