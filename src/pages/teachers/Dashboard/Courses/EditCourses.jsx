import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import RichTextEditor from '../../../../components/teachers/Summernote';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const EditCourses = () => {
  return (
    <>
      <Box>
        <Box my="5">
          <Link color="#2c698d" fontSize="14px">
            <ChevronLeftIcon />
            Back to Course
          </Link>
        </Box>
        <VStack>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type="text" placeholder="title" />
          </FormControl>
          <FormControl>
            <FormLabel>Short description</FormLabel>
            <Input type="text" placeholder="description" />
          </FormControl>
          <FormControl>
            <FormLabel>Course</FormLabel>
            <RichTextEditor />
          </FormControl>
          <Button
            size="sm"
            w="10%"
            color="white"
            bgColor="#2c698d"
            colorScheme="blue"
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
};

const EditCoursesPage = () => {
  return (
    <Sidebar>
      <EditCourses />
    </Sidebar>
  );
};
export default EditCoursesPage;
