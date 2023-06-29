const mongoose = require('mongoose');

const starshipSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  model: {
    type: String,
    required: false
  },
  manufacturer: {
    type: String,
    required: false
  },
  cost_in_credits: {
    type: String,
    required: false
  },
  length: {
    type: String,
    required: false
  },
  crew: {
    type: String,
    required: false
  },
  passengers: {
    type: String,
    required: false
  },
  cargo_capacity: {
    type: String,
    required: false
  },
  consumables: {
    type: String,
    required: false
  },
  hyperdrive_rating: {
    type: String,
    required: true
  },
  MGLT: {
    type: String,
    required: true
  },
  starship_class: {
    type: String,
    required: true
  },
  pilots: [{
    type: Number,
    ref: 'People'
  }],
  films: [{
    type: Number,
    ref: 'Films'
  }],
  created: {
    type: Date,
    required: false
  },
  edited: {
    type: Date,
    required: false
  },
},
{ collection: 'starships' }
);

module.exports = mongoose.model('Starships', starshipSchema);
