const mongoose = require('mongoose');

const shedSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    fueltype: {
        type: String,
        required: true
    },
    arrivaltime: {
        type: String,
        required: true
    },
    finishtime: {
        type: String
    }
})

exports.Shed = mongoose.model('Shed', shedSchema);