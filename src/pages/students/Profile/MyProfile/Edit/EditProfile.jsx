import React from 'react';
import Header from '../../../../../components/Header';
import Footer from '../../../../../components/Footer';
import SidebarEdit from './SidebarEdit';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import General from './Submenu/General';
import ChangePassword from './Submenu/ChangePassword';
const EditProfile = () => {
  return (
    <>
      <Header />
      <Flex minH="71.8vh" align="center">
        <Grid templateColumns="100% 100%" gap="6">
          <GridItem>
            <SidebarEdit />
          </GridItem>
          <GridItem border="1px solid black">
            <ChangePassword />
          </GridItem>
        </Grid>
      </Flex>
      <Footer />
    </>
  );
};

export default EditProfile;
