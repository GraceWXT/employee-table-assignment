import {
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
import FormInput from "./FormInput";

const EmployeeForm = ({ onClose, handleAdd, employee, dataFields, headerTexts }) => {

  const formInputs = dataFields.map((fieldName, index) => (
    <FormInput key={index} employee={employee} fieldName={fieldName} headerText={headerTexts[index]} />
  ));

  return (
    <>
      <ModalBody pb={6}>
        <VStack spacing={5}>
          {formInputs}
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Button
          colorScheme="blue" mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </>
  );
};

export default EmployeeForm;
