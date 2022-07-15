import { Td, Button, useDisclosure } from "@chakra-ui/react";
import ModalContainer from "./ModalContainer";
import EmployeeForm from "./EmployeeForm";

const EditModal = ({
  employee, dataFields, headerTexts, header, setEmployees, employeeIndex
}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Td>
      <Button
        variant="outline"
        colorScheme="orange"
        onClick={onOpen}
      >
        Edit
      </Button>
      <ModalContainer isOpen={isOpen} onClose={onClose} header={header}>
        <EmployeeForm
          onClose={onClose}
          employee={employee}
          dataFields={dataFields}
          headerTexts={headerTexts}
          setEmployees={setEmployees}
          employeeIndex={employeeIndex}
        />
      </ModalContainer>
    </Td>
  );
};

export default EditModal;
