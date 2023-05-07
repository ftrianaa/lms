import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const EditCourses = () => {
  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input type="text" placeholder="title" />
        </FormControl>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input type="text" placeholder="title" />
        </FormControl>
      </Box>
    </>
  );
};

export default EditCourses;
