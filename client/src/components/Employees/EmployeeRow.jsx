import { Tr, Td, Button } from "@chakra-ui/react";

const EmployeeRow = ({ employee, dataFields }) => {

  const tds = dataFields.map(dataField => <Td>{employee[dataField]}</Td>);

  return (
    <Tr>
      {tds}
      <Td><Button>Edit</Button></Td>
      <Td><Button>Delete</Button></Td>
    </Tr>
  );
};

export default EmployeeRow;
