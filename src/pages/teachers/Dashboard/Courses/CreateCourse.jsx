import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const CreateCourse = () => {
  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input type="text" placeholder="title" />
        </FormControl>
      </Box>
    </>
  );
};

export default CreateCourse;
