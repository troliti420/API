const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  diameter: {
    type: String,
    required: true
  },
  rotation_period: {
    type: String,
    required: true
  },
  orbital_period: {
    type: String,
    required: true
  },
  gravity: {
    type: String,
    required: true
  },
  population: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true
  },
  terrain: {
    type: String,
    required: true
  },
  surface_water: {
    type: String,
    required: true
  },
  residents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'People'
  }],
  films: [{
    type: mongoose.Schema.Types.ObjectId,
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
{ collection: 'planets' }
);

module.exports = mongoose.model('Planets', planetSchema);
