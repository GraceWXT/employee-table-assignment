import { Tr, Td, Button } from "@chakra-ui/react";

const EmployeeRow = ({ employee, dataFields }) => {

  const tds = dataFields.map(dataField => (
    <Td
      key={employee.firstName + employee.lastName + dataField}
      fontWeight="semibold"
    >
      {employee[dataField]}
    </Td>
  ));

  return (
    <Tr>
      {tds}
      <Td><Button variant="outline" colorScheme="orange">Edit</Button></Td>
      <Td><Button variant="outline" colorScheme="red">Delete</Button></Td>
    </Tr>
  );
};

export default EmployeeRow;
