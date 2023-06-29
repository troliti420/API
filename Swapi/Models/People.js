const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    edited: {
        type: Date,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: false
    },
    gender: {
        type: String,
        required: true
    },
    skin_color: {
        type: String,
        required: true
    },
    hair_color: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    eye_color: {
        type: String,
        required: true
    },
    mass: {
        type: String,
        required: true
    },
    homeworld: {
        type: Number,
        required: true
    },
    birth_year: {
        type: String,
        required: true
    },
    model:
        { type: String, required: false },
    pk: { type: Number, required: false },
},
{ collection: 'people' } 
);

module.exports = mongoose.model('People', peopleSchema);
