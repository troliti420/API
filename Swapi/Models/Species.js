const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  classification: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  average_height: {
    type: String,
    required: true
  },
  skin_colors: {
    type: String,
    required: true
  },
  hair_colors: {
    type: String,
    required: true
  },
  eye_colors: {
    type: String,
    required: true
  },
  average_lifespan: {
    type: String,
    required: true
  },
  homeworld: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Planets'
  },
  language: {
    type: String,
    required: true
  },
  people: [{
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
{ collection: 'species' }
);

module.exports = mongoose.model('Species', speciesSchema);
