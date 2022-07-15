import { Button, useDisclosure } from "@chakra-ui/react";
import ModalContainer from "./ModalContainer";
import EmployeeForm from "./EmployeeForm";

// The Add Employee button with the matching Modal
const AddModal = ({ dataFields, headerTexts, setEmployees }) => {

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
          dataFields={dataFields}
          headerTexts={headerTexts}
          setEmployees={setEmployees}
        />
      </ModalContainer>
    </>
  );
};

export default AddModal;
