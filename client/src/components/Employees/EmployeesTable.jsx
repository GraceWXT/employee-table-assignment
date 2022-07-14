import { Table, Thead, Tbody } from "@chakra-ui/react";
import HeaderRow from "./HeaderRow";

const EmployeesTable = ({ employees }) => {

  const headerTexts = Object.keys(employees[0]).map(fieldName => (
    fieldName.replace(/([A-Z])/g, " $1")
      .replace(/^./, match => match.toUpperCase())
  ));

  return (
    <Table>
      <Thead>
        <HeaderRow headerTexts={headerTexts}/>
      </Thead>
      <Tbody>

      </Tbody>
    </Table>
  );
};

export default EmployeesTable;
