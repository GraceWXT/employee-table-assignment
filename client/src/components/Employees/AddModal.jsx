import { Button, useDisclosure } from "@chakra-ui/react";
import ModalContainer from "./ModalContainer";
import EmployeeForm from "./EmployeeForm";

const AddModal = ({ handleAdd, dataFields, headerTexts, setEmployees }) => {

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
      <ModalContainer
        isOpen={isOpen}
        onClose={onClose}
        header="Add Employee"
      >
        <EmployeeForm
          onClose={onClose}
          handleAdd={handleAdd}
          dataFields={dataFields}
          headerTexts={headerTexts}/>
      </ModalContainer>
    </>
  );
};

export default AddModal;
