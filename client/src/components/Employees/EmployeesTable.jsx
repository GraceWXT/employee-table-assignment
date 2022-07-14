import { Table, Thead, Tbody } from "@chakra-ui/react";
import EmployeeRow from "./EmployeeRow";
import HeaderRow from "./HeaderRow";
import AddModal from "./AddModal";

const EmployeesTable = ({ employees }) => {

  const dataFields = Object.keys(employees[0]);
  const headerTexts = dataFields.map(fieldName => (
    fieldName.replace(/([A-Z])/g, " $1")
      .replace(/^./, match => match.toUpperCase())
  ));

  const employeeRows = employees.map(employee => (
    <EmployeeRow
      key={employee.firstName + employee.lastName}
      employee={employee}
      dataFields={dataFields}
      headerTexts={headerTexts}
    />
  ));

  // Handle add employee
  const handleAdd = () => {

  };

  return (
    <>
      <Table>
        <Thead>
          <HeaderRow headerTexts={headerTexts}/>
        </Thead>
        <Tbody>
          {employeeRows}
        </Tbody>
      </Table>
      <AddModal
        handleAdd={handleAdd}
        dataFields={dataFields}
        headerTexts={headerTexts}
      />
    </>
  );
};

export default EmployeesTable;
