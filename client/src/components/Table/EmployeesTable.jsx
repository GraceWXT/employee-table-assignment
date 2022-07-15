import { Table, Thead, Tbody } from "@chakra-ui/react";
import EmployeeRow from "./EmployeeRow";
import HeaderRow from "./HeaderRow";
import AddModal from "../Form&Modal/AddModal";

const EmployeesTable = ({ employees, setEmployees }) => {

  const dataFields = Object.keys(employees[0]);
  const headerTexts = dataFields.map(fieldName => (
    fieldName.replace(/([A-Z])/g, " $1")
      .replace(/^./, match => match.toUpperCase())
  ));

  const employeeRows = employees.map((employee, employeeIndex) => (
    <EmployeeRow
      key={employeeIndex + employee.firstName + employee.lastName}
      employee={employee}
      dataFields={dataFields}
      headerTexts={headerTexts}
      setEmployees={setEmployees}
      employeeIndex={employeeIndex}
    />
  ));

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
        dataFields={dataFields}
        headerTexts={headerTexts}
        setEmployees={setEmployees}
      />
    </>
  );
};

export default EmployeesTable;
