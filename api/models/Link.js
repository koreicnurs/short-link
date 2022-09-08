const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkSchema = new Schema ({
    shortUrl: String,
    originalUrl: String
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;