const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var listSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String
    },
    price: {
        type: String
    },
    thumb: {
        type: String
    },
    quantity: {
        type: Number,
        default: 1,
    },
}, { timestamps: true });

//Export the model
module.exports.list = mongoose.model('wishlist', listSchema);