import { Tr, Td, Button, useDisclosure, ModalBody } from "@chakra-ui/react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";


const EmployeeRow = ({ employee, dataFields, headerTexts }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

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
