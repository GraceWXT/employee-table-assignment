import { useState, useEffect } from "react";
import axios from "../../api/axios";

import { Heading, VStack, Center} from "@chakra-ui/react";

import EmployeesTable from "./EmployeesTable";
import AddModal from "./AddModal";

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

  // Handle add employee
  const handleAdd = () => {

  };

  return (
    <Center>
      <VStack w="45em" marginTop="2em">
        <Heading textTransform="uppercase" >Employees</Heading>
        {employees.length && <EmployeesTable employees={employees} />}
        <AddModal handleAdd={handleAdd} />
      </VStack>
    </Center>

  );
};

export default Employees;
