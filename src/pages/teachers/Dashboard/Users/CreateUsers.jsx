import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';

const CreateUsers = () => {
  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
      </Box>
    </>
  );
};

const CreateUsersPage = () => {
  return (
    <Sidebar>
      <CreateUsers />
    </Sidebar>
  );
};
export default CreateUsersPage;
