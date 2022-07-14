import { Tr, Td, Button, useDisclosure, ModalBody } from "@chakra-ui/react";
import ModalContainer from "./ModalContainer";
import EmployeeForm from "./EmployeeForm";

const DeleteModal = ({ employee }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Td>
      <Button variant="outline" colorScheme="red" onClick={onOpen}>Delete</Button>
      <ModalContainer isOpen={isOpen} onClose={onClose}>
        <ModalBody>Delete? {employee.firstName}</ModalBody>
      </ModalContainer>
    </Td>
  );
};

export default DeleteModal;