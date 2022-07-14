import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input} from "@chakra-ui/react";

const FormInput = ({ employee, fieldName, headerText, setEmployeeData}) => {

  const defaultValue = employee ? employee[fieldName] : "";
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    const fieldValue = fieldName === "salary" ? parseInt(event.target.value) : event.target.value;

    setEmployeeData(prev => {
      const updatedData = {...prev};
      updatedData[fieldName] = fieldValue;
      return updatedData;
    });
  };

  return (
    <FormControl isRequired>
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
    </FormControl>
  );
};

export default FormInput;
