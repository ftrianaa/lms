import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Flex,
  //   Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import RichTextEditor from '../../../../components/teachers/Summernote';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['MP4', 'PPTX', 'PDF'];
const fileTypesQuiz = ['PDF', 'JPG', 'JPEG'];

const ModalTopics = props => {
  const { isOpen, onClose, setModals } = props;
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };
  const [quiz, setQuiz] = useState(false);
  const [topic, setTopic] = useState(0);
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
          <ModalHeader>Add Topic</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="left">
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input type="text" placeholder="e.g Present tense" />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input type="text" placeholder="Description of Topic" />
              </FormControl>
              <FormControl>
                <FormLabel>Content</FormLabel>
                <Box my="5">
                  <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  />
                </Box>
                <Text fontSize="12px">
                  {file
                    ? `File name: ${file[0].name}`
                    : 'no files uploaded yet'}
                </Text>
                <RichTextEditor />
              </FormControl>
              <Checkbox my="5" onChange={() => setQuiz(!quiz)}>
                Add Quiz
              </Checkbox>
              {quiz ? (
                <>
                  <Text>Drop a Quiz</Text>
                  <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypesQuiz}
                  />
                  <Text fontSize="12px">
                    {file
                      ? `File name: ${file[0].name}`
                      : 'no files uploaded yet'}
                  </Text>
                </>
              ) : (
                <></>
              )}

              {topic >= 1 ? (
                Array.from(Array(topic), (e, i) => (
                  <Box key={i}>
                    <Flex align="center" justify="space-between">
                      <Divider borderColor="#2c698d" w="45%" />
                      <Link fontSize="12px">{i + 1}</Link>
                      <Divider borderColor="#2c698d" w="45%" />
                    </Flex>
                    <Card p="5" marginY="30px">
                      <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input type="text" placeholder="e.g Present tense" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input type="text" placeholder="Description of Topic" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Content</FormLabel>
                        <Box my="5">
                          <FileUploader
                            multiple={true}
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                          />
                        </Box>
                        <Text fontSize="12px">
                          {file
                            ? `File name: ${file[0].name}`
                            : 'no files uploaded yet'}
                        </Text>
                        <RichTextEditor />
                      </FormControl>
                      <Checkbox onChange={() => setQuiz(!quiz)} my="5">
                        Add Quiz
                      </Checkbox>
                      {quiz ? (
                        <>
                          <Text>Drop a Quiz</Text>
                          <FileUploader
                            multiple={true}
                            handleChange={handleChange}
                            name="file"
                            types={fileTypesQuiz}
                          />
                          <Text fontSize="12px">
                            {file
                              ? `File name: ${file[0].name}`
                              : 'no files uploaded yet'}
                          </Text>
                        </>
                      ) : (
                        <></>
                      )}
                    </Card>
                  </Box>
                ))
              ) : (
                <></>
              )}
              <Flex align="center" justify="space-between">
                <Divider borderColor="#2c698d" w="45%" />

                <Link fontSize="12px" onClick={() => setTopic(topic + 1)}>
                  Add Topics
                </Link>
                <Divider borderColor="#2c698d" w="45%" />
              </Flex>
            </VStack>
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

export default ModalTopics;
