const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');

require('dotenv').config();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();



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
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Body-parser

app.use(express.json());


// Routes

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;