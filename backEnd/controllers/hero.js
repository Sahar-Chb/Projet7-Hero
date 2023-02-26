const Hero = require('../models/hero');


const createHero = async (req, res,filename) => {
  try {
    let data = req.body;
    let hero = new Hero(data);
    hero.image = filename;
    let result = await hero.save();

    res.send(result);

  } catch (error) {
    res.send(error)
  }
  
}

const getAllHero = async (req, res) => {
  try {
    let result = await Hero.find();
    res.send(result);


  }catch (error) {
    res.send(error)
  }
  
  
}

const byid = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Hero.findById({ _id: id });
    res.send(result);

  }catch (error) {
    res.send(error)
  }
  
}

const deleteHero = async (req, res) => {
  try {
    
    let id = req.params.id;
    let result = await Hero.findByIdAndDelete({ _id: id });
    res.send(result);

  }catch (error) {
    res.send(error)
  }

  
}


const update = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    let result = await Hero.findByIdAndUpdate({ _id: id }, data);
    res.send(result);
    

  }catch (error) {
    res.send(error)
  }
  
}



module.exports = {
  createHero,
  getAllHero,
  deleteHero,
  byid,
  update
}