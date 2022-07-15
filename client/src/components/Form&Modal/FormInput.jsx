import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input} from "@chakra-ui/react";

const FormInput = ({ employee, fieldName, headerText, setEmployeeData, isError }) => {

  const defaultValue = employee ? employee[fieldName] : "";
  const [value, setValue] = useState(defaultValue);
  const [isWrongType, setIsWrongType] = useState(false);

  const handleChange = (event) => {
    // Set the input value on change
    setValue(event.target.value);
    // Parse the salary input to integer
    const fieldValue = fieldName === "salary" ? parseInt(event.target.value) : event.target.value;
    // If the input is parsed to NaN, show the wrong type error
    if (fieldName === "salary" && isNaN(fieldValue)) return setIsWrongType(true);
    // If it passed the above check while the error message is shown, remove the error
    if (isWrongType) setIsWrongType(false);
    // Set the validated data to status
    setEmployeeData(prev => {
      const updatedData = {...prev};
      updatedData[fieldName] = fieldValue;
      return updatedData;
    });
  };

  return (
    <FormControl isRequired isInvalid={(isError && !value) || isWrongType}>
      <FormLabel
        htmlFor={fieldName}
      >
        {headerText}
      </FormLabel>
      <Input
        id={fieldName}
        name={fieldName}
        placeholder={headerText}
        value={value}
        onChange={handleChange}
      />
      {isWrongType && <FormErrorMessage>Please enter a number. </FormErrorMessage>}
    </FormControl>
  );
};

export default FormInput;
