const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

// CORS configuration

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// Activation of Helmet to secure the headers

app.use(helmet());

// Connect to DB

mongoose
  .connect(process.env.SECRET_DB,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Body-parser

app.use(express.json());





app.listen('3000' , () => {
    console.log('Backend is running on port 3000');
})