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
    console.log("fieldName", fieldName);
    setEmployeeData(prev => {
      const updatedData = {...prev};
      updatedData[fieldName] = event.target.value;
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
