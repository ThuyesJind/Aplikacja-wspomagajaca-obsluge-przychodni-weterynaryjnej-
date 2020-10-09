const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const weterynarzApi = require('./routes/weterynarz-api');
const klientApi = require('./routes/klient-api');
const wizytaApi = require('./routes/wizyta-api');
const lekApi = require('./routes/lek-api');

  mongoose.connect('mongodb://localhost:27017/Baza', 
  { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
    );

app.use(bodyParser.json());
app.use(cors());
app.use('/api', weterynarzApi);
app.use('/api', klientApi);
app.use('/api', wizytaApi);
app.use('/api', lekApi);

app.listen(port, () => console.log(`Server up and running on port: ${port}!`));