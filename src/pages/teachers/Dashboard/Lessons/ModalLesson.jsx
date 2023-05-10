import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

const ModalLesson = props => {
  const { isOpen, onClose, setModals } = props;
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setModals('');
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Lesson</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Lesson Title</FormLabel>
              <Input type="text" placeholder="e.g Grammar" />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder="Description of Lesson" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setModals('');
              }}
            >
              Close
            </Button>
            <Button colorScheme="green">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLesson;
