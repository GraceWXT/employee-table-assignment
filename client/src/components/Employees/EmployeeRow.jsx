import { Tr, Td, Button, useDisclosure, ModalBody } from "@chakra-ui/react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";


const EmployeeRow = ({ employee, dataFields }) => {

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
      <EditModal employee={employee}/>
      <DeleteModal employee={employee}/>
    </Tr>
  );
};

export default EmployeeRow;
