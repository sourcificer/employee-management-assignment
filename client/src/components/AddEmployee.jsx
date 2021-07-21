import React, { useState } from 'react';
import { createData } from '../employee.service';

const AddEmployee = () => {
  const initialEmployeeData = {
    name: "",
    role: "",
    manager: "",
    office: "",
    joining_date: "",
    mobile: "",
  };
  const [employee, setEmployee] = useState(initialEmployeeData);
  
  const saveEmployee = () => {
    createData(employee).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  };
  
}