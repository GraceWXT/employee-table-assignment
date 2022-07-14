import { Tr, Td, Button, useDisclosure, ModalBody } from "@chakra-ui/react";
import ModalContainer from "./ModalContainer";
import EmployeeForm from "./EmployeeForm";

const EditModal = ({ employee }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Td>
      <Button variant="outline" colorScheme="orange" onClick={onOpen}>Edit</Button>
      <ModalContainer isOpen={isOpen} onClose={onClose}>
        <EmployeeForm onClose={onClose}></EmployeeForm>
        {employee.firstName}
      </ModalContainer>
    </Td>
  );
};

export default EditModal;
