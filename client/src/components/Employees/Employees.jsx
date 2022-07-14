import { Heading, VStack } from "@chakra-ui/react";

import EmployeesTable from "./EmployeesTable";

const Employees = () => {
  return (
    <VStack>
      <Heading textTransform="uppercase" >Employees</Heading>
      <EmployeesTable />
    </VStack>
  );
};

export default Employees;
