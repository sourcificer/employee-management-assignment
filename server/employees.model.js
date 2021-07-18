const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: String,
  role: String,
  Manager: String,
  Office: String,
  joining_date: { type: Date },
  Mobile: {
    type: Number,
    validate: {
      validator: function (v) {
        return /d{10}/.test(v);
      },
      message: '{VALUE} is not a valid 10 digit number!',
    },
  },
  added_on: { type: Date, default: Date.now() },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
