import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton} from "@chakra-ui/react";

const ModalContainer = ({ isOpen, onClose, header, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
