const express = require('express');
const EmployeeModel = require('./employees.model');

const router = express.Router();

router.get('/', async (req, res) => {
  const results = await EmployeeModel.find({}).sort({ joining_date: 'descending' });
  res.json(results);
});

router.post('/', (req, res) => {
  const { employee_data } = req.body;
  const employeeObj = new EmployeeModel(employee_data);
  employeeObj
    .save()
    .then(() => res.status(200).json('Data inserted successfully'))
    .catch((err) => res.status(500).json(`Error while inserting data`));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleteEmployee = await EmployeeModel.deleteOne({ _id: id });
  if (deleteEmployee.ok === 1) {
    res.status(200).json('Employee successfully deleted');
  } else {
    res.status(500).json('Error while deleting employee');
  }
});

module.exports = router;
