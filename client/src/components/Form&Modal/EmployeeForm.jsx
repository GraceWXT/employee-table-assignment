import { useState } from "react";
import {
  ModalBody,
  ModalFooter,
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

  // Render the inputs
  const formInputs = dataFields.map((fieldName, index) => (
    <FormInput
      key={index}
      employee={employee}
      fieldName={fieldName}
      headerText={headerTexts[index]}
      setEmployeeData={setEmployeeData}
    />
  ));

  // Handle add employee
  const handleAdd = (event) => {
    event.preventDefault();
    setEmployees(prev => [...prev, employeeData]);
    onClose();
  };

  // Handle edit employee
  const handleEdit = (event) => {
    event.preventDefault();
    setEmployees(prev => {
      const newEmployees = [...prev];
      newEmployees[employeeIndex] = employeeData;
      return newEmployees;
    });
    onClose();
  };

  return (
    <>
      <form>
        <ModalBody pb={6}>
          <VStack spacing={5}>
            {formInputs}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            type="submit"
            onClick={employeeIndex !== undefined ? handleEdit : handleAdd}
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
