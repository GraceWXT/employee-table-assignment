import { Tr, Td } from "@chakra-ui/react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";


const EmployeeRow = ({ employee, dataFields, headerTexts, setEmployees, employeeIndex }) => {

  // Map over the data fields to create table cells for one employee
  // Format the currency if necessary
  const tds = dataFields.map(dataField => (
    <Td
      key={employee.firstName + employee.lastName + dataField}
      fontWeight="semibold"
    >
      {dataField === "salary" ?
        employee[dataField].toLocaleString("en-CA", { style: "currency", currency: "CAD" }).slice(0, -3)
        : employee[dataField]}
    </Td>
  ));

  // End each row with edit and delete buttons
  return (
    <Tr>
      {tds}
      <EditModal
        employee={employee}
        dataFields={dataFields}
        headerTexts={headerTexts}
        setEmployees={setEmployees}
        employeeIndex={employeeIndex}
        header="Edit Employee"
      />
      <DeleteModal
        employee={employee}
        setEmployees={setEmployees}
        employeeIndex={employeeIndex}
        header="Delete Employee"
      />
    </Tr>
  );
};

export default EmployeeRow;
