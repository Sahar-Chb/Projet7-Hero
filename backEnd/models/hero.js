const mongoose = require('mongoose');

const Hero = mongoose.model('Hero', {
  
  name: {
    type:String
  },
  image: {
    type:String
  },
  power: {
    type:Number
  }
})

module.exports = Hero;