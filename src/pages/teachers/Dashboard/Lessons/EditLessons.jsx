import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Link,
  Textarea,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const EditLessons = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box my="5">
        <Link color="#2c698d" fontSize="14px" onClick={() => navigate(-1)}>
          <ChevronLeftIcon />
          Back
        </Link>
      </Box>
      <Container>
        <FormControl>
          <FormLabel>Lesson Title</FormLabel>
          <Input type="text" placeholder="e.g Grammar" />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Description of Lesson" />
        </FormControl>
        <Box display="flex" justifyContent="right">
          <Button
            rightIcon={<ChevronRightIcon fontSize="20px" />}
            size="sm"
            w="30%"
            my="5"
            color="white"
            bgColor="#2c698d"
            colorScheme="blue"
            onClick={() => navigate('/teacher/topics/create')}
          >
            Save
          </Button>
        </Box>
      </Container>
    </>
  );
};

const EditLessonsPage = () => {
  return (
    <Sidebar>
      <EditLessons />
    </Sidebar>
  );
};
export default EditLessonsPage;
