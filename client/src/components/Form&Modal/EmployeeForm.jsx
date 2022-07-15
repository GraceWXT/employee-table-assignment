import { useState } from "react";
import {
  ModalBody,
  ModalFooter,
  Text,
  Button,
  VStack
} from "@chakra-ui/react";
import FormInput from "./FormInput";

// The form for editing or adding an employee
const EmployeeForm = ({
  onClose, employee, dataFields, headerTexts, setEmployees, employeeIndex
}) => {

  // UseState to keep track of form data
  const defaultData = (() => {
    if (employee) return employee;

    const defaultData = {};
    for (let dataField of dataFields) {
      defaultData[dataField] = "";
    }
    return defaultData;
  })();
  const [employeeData, setEmployeeData] = useState(defaultData);
  const [isError, setIsError] = useState(false);

  // Render the inputs
  const formInputs = dataFields.map((fieldName, index) => (
    <FormInput
      key={index}
      employee={employee}
      fieldName={fieldName}
      headerText={headerTexts[index]}
      setEmployeeData={setEmployeeData}
      isError={isError}
    />
  ));

  // Check if all fields are filled
  const isFilled = () => {
    let isFilled = Object.values(employeeData).every(value => value !== "");
    if (!isFilled) {
      setIsError(true);
    }
    return isFilled;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFilled()) return;
    if (employeeIndex !== undefined) {
      setEmployees(prev => {
        const newEmployees = [...prev];
        newEmployees[employeeIndex] = employeeData;
        return newEmployees;
      });
    } else {
      setEmployees(prev => [...prev, employeeData]);
    }
    onClose();
  };

  return (
    <>
      <form>
        <ModalBody pb={6}>
          <VStack spacing={5}>
            {formInputs}
            {isError && <Text color="red">Please fill in all required fields before submitting.</Text>}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            type="submit"
            onClick={handleSubmit}
          >
          Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </form>
    </>
  );
};

export default EmployeeForm;
