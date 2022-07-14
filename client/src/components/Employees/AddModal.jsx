import { Button, useDisclosure } from "@chakra-ui/react";
import ModalContainer from "./ModalContainer";
import EmployeeForm from "./EmployeeForm";

const AddModal = ({ handleAdd }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        alignSelf="flex-end"
        colorScheme="green"
        onClick={onOpen}
      >
          Add Employee
      </Button>
      <ModalContainer isOpen={isOpen} onClose={onClose}>
        <EmployeeForm onClose={onClose} handleAdd={handleAdd}></EmployeeForm>
      </ModalContainer>
    </>
  );
};

export default AddModal;
