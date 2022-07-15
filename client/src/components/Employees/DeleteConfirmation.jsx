import {
  ModalBody,
  ModalFooter,
  Button,
  Text
} from "@chakra-ui/react";

const DeleteConfirmation = ({ employee, setEmployees, employeeIndex, onClose }) => {

  return (
    <>
      <ModalBody pb={6}>
        <Text>{`Are you sure you want to delete
         ${employee.firstName} ${employee.lastName}?`}</Text>
      </ModalBody>
      <ModalFooter>
        <Button
          colorScheme="red"
          mr={3}
          type="submit"
          // onClick={}
        >
          Delete
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </>

  );
};

export default DeleteConfirmation;
