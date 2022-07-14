import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input} from "@chakra-ui/react";

const FormInput = ({ employee, fieldName, headerText}) => {
  const defaultValue = employee ? employee[fieldName] : "";
  const [value, setValue] = useState(defaultValue);


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (<FormControl>
    <FormLabel
      htmlFor={fieldName}
    >
      {headerText}
    </FormLabel>
    <Input
      id={fieldName}
      placeholder={headerText}
      value={value}
      onChange={handleChange}
    />
  </FormControl>);
};

export default FormInput;
