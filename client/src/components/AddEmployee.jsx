import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@chakra-ui/react";

const AddEmployee = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const requestData = {
      employee_data: data,
    };
    console.log(JSON.stringify(requestData));
    saveEmployee(requestData);
  };

  const saveEmployee = (requestBody) => {
    fetch(`${process.env.REACT_APP_API_URL}/employees/`, {
      method: "POST",
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        reset();
      })
      // eslint-disable-next-line
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input variant="outline" type="text" {...register("name", { required: true, maxLength: 100 })} />
      <Input variant="outline" type="text" {...register("role", { required: true })} />
      <Input variant="outline" type="text" {...register("manager", { required: true })} />
      <Input variant="outline" type="text" {...register("office", { required: true })} />
      <Input variant="outline" type="tel" {...register("mobile", { maxLength: 12 })} />
      <Input variant="outline" type="date" {...register("joining_date", {})} />

      <Button colorScheme="blue" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddEmployee;
