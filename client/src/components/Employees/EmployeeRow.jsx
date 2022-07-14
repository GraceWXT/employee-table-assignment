import { Tr, Td } from "@chakra-ui/react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";


const EmployeeRow = ({ employee, dataFields, headerTexts }) => {

  // Map over the data fields to create table cells for one employee
  // Format the currency if necessary
  const tds = dataFields.map(dataField => (
    <Td
      key={employee.firstName + employee.lastName + dataField}
      fontWeight="semibold"
    >
      {typeof employee[dataField] === "number" ?
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
      />
      <DeleteModal
        employee={employee}
        dataFields={dataFields}
        headerTexts={headerTexts}
      />
    </Tr>
  );
};

export default EmployeeRow;
