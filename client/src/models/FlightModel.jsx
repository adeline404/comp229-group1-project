const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    id: Number,
    from: String,
    to: String,
    date: Date,
    price: Number,
});

module.exports = mongoose.model('Flight', flightSchema);