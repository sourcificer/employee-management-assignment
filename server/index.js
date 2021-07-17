require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Welcome!');
});

mongoose
  .connect(process.env.DB_URL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`listenning at port ${port}`);
});
