const express = require('express');

require('./config/connect')

const cors = require('cors');

const app = express();

app.use(cors());


const heroRoute=require('./routes/hero');


app.use(express.json());

app.use('/hero', heroRoute);

app.use('/getimage', express.static('./uploads'));


app.listen(3005, () => {
  console.log('server work!');
})