import { useState } from "react";
import {
  ModalBody,
  ModalFooter,
  Button,
  VStack
} from "@chakra-ui/react";
import FormInput from "./FormInput";

const EmployeeForm = ({
  onClose, handleAdd, handleEdit, employee, dataFields, headerTexts
}) => {
  const defaultData = (() => {
    if (employee) return employee;

    const defaultData = {};
    for (let dataField of dataFields) {
      defaultData[dataField] = "";
    }
    return defaultData;
  })();
  const [employeeData, setEmployeeData] = useState(defaultData);
  const formInputs = dataFields.map((fieldName, index) => (
    <FormInput
      key={index}
      employee={employee}
      fieldName={fieldName}
      headerText={headerTexts[index]}
      setEmployeeData={setEmployeeData}
    />
  ));
  console.log('employeeData :>> ', employeeData);

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
            onClick={employee ? handleEdit : handleAdd}
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
