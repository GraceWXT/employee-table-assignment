import { Td, Button, useDisclosure } from "@chakra-ui/react";
import DeleteConfirmation from "./DeleteConfirmation";
import ModalContainer from "./ModalContainer";


const DeleteModal = ({ employee, header, setEmployees, employeeIndex }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Td>
      <Button variant="outline" colorScheme="red" onClick={onOpen}>Delete</Button>
      <ModalContainer isOpen={isOpen} onClose={onClose} header={header}>
        <DeleteConfirmation
          employee={employee}
          setEmployees={setEmployees}
          employeeIndex={employeeIndex}
          onClose={onClose}
        />
      </ModalContainer>
    </Td>
  );
};

export default DeleteModal;
