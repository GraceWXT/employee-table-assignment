import { useState, useEffect } from "react";
import axios from "../../api/axios";

import { Heading, VStack } from "@chakra-ui/react";

import EmployeesTable from "./EmployeesTable";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  // Get the employees data and set to state
  useEffect(() => {
    axios.get("/api/employees")
      .then(response => {
        setEmployees(response.data.employees);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <VStack>
      <Heading textTransform="uppercase" >Employees</Heading>
      <EmployeesTable />
    </VStack>
  );
};

export default Employees;
