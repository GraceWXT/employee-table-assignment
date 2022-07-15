import {
  ModalBody,
  ModalFooter,
  Button,
  Text
} from "@chakra-ui/react";

const DeleteConfirmation = ({ employee, setEmployees, employeeIndex, onClose }) => {

  // Delete the employee at the given index
  const handleDelete = () => {
    setEmployees(prev => {
      return prev.filter((employee, index) => index !== employeeIndex);
    });
  };

  // Double check with user before deleting
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
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </>

  );
};

export default DeleteConfirmation;
