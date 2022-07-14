import {
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";

const EmployeeForm = ({ onClose, handleAdd, employee, dataFields, headerTexts }) => {

  const formInputs = dataFields.map((fieldName, index) => {

    // if (employee.fieldName) {

    // }
    return (<FormControl>
      <FormLabel
        htmlFor={fieldName}
      >
        {headerTexts[index]}
      </FormLabel>
      <Input
        id={fieldName}
        placeholder={headerTexts[index]}
      />
    </FormControl>);
  });

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
