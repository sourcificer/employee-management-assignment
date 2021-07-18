require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const EmployeeController = require('./employees.controller');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Welcome!');
});

mongoose
  .connect(process.env.DB_URL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/employees', EmployeeController);

app.listen(port, () => {
  console.log(`listenning at port ${port}`);
});
