const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  episode_id: {
    type: Number,
    required: true
  },
  opening_crawl: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: false
  },
  edited: {
    type: Date,
    required: false
  },
  characters: [{
    type: Number,
    ref: 'People'
  }],
  planets: [{
    type: Number,
    ref: 'Planets'
  }],
  starships: [{
    type: Number,
    ref: 'Starships'
  }],
  vehicles: [{
    type: Number,
    ref: 'Vehicles'
  }],
  species: [{
    type: Number,
    ref: 'Species'
  }],
},
{ collection: 'films' }
);

module.exports = mongoose.model('Films', filmSchema);
