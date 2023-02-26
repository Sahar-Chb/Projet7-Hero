const express = require('express');

const router = express.Router();

const { createHero, getAllHero, byid, deleteHero, update } = require('../controllers/hero');



const multer = require('multer');

let filename = '';

const myStorage = multer.diskStorage({
  destination: './uploads',
  filename: (_req, file, redirect) => {
  filename = Date.now() + '.' + file.mimetype.split('/')[1];
  redirect(null, filename);
  }  
})

const upload = multer({ storage: myStorage });



router.post('/add', upload.any('image'), (req, res) => {
  createHero (req, res, filename);
});

router.get('/all', getAllHero);
router.get('/getbyid/:id', byid);
router.delete('/delete/:id', deleteHero);
router.put('/update/:id', update);




  module.exports = router;