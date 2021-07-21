import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Th, Tr, Td, TableCaption } from "@chakra-ui/react";

const DisplayEmployees = (props) => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/employees/`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setEmployees(jsonResponse))
      // eslint-disable-next-line
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <div>
        <Table variant="simple">
          <TableCaption>List displaying the detials of all employees</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Role</Th>
              <Th>Manager</Th>
              <Th>Office</Th>
              <Th>Joining Date</Th>
              <Th>Mobile</Th>
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((employee) => (
              <Tr>
                <Td>{employee.name || "-"}</Td>
                <Td>{employee.role || "-"}</Td>
                <Td>{employee.manager || "-"}</Td>
                <Td>{employee.office || "-"}</Td>
                <Td>{new Date(employee.joining_date).toDateString() || "-"}</Td>
                <Td>{employee.mobile || "-"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default DisplayEmployees;
