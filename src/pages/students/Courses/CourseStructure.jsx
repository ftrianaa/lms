import React from 'react';
import HeaderLesson from '../../../components/students/HeaderLesson';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Heading,
  ListItem,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BsCardChecklist, BsCircle } from 'react-icons/bs';
import AlertTopics from '../../../components/students/AlertTopics';
const CourseStructure = () => {
  return (
    <>
      <HeaderLesson />
      <AlertTopics />
      <Box w="90%" m="auto">
        <Heading fontSize="48px" fontWeight="normal">
          Course Structure
        </Heading>

        <Flex
          bgColor="#f0f3f6"
          p="2"
          px="3"
          borderRadius="5"
          align="center"
          justify="space-between"
          my="5"
        >
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
            color="#2c698d"
            fontWeight="bold"
            fontSize="12px"
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Free Course Demo</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Course Structure</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Tag
            borderRadius="full"
            variant="solid"
            colorScheme="green"
            size="sm"
          >
            Complete
          </Tag>
        </Flex>
        <Box>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem,
            explicabo laudantium voluptate totam excepturi molestiae. Voluptates
            ab vitae quo fuga magni obcaecati laboriosam soluta quod expedita
            suscipit perspiciatis nemo ducimus sit necessitatibus vero eveniet
            quis maxime, ipsa dolores impedit commodi error saepe architecto.
            Qui corrupti obcaecati officiis dolorem accusamus.
          </Text>
          <UnorderedList my="5" mx="10">
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, hic
            officia. Voluptas praesentium sapiente ratione? Harum, molestias
            sed? Nulla sapiente, voluptatum dicta assumenda aliquid ipsum
            molestiae dolore voluptas repellat temporibus.
          </Text>

          <Box
            borderRadius="5"
            border="2px solid #e2e7ed"
            overflow="hidden"
            my="5"
          >
            <Flex
              bgColor="#2c698d"
              justify="space-between"
              align="center"
              color="white"
              p="5"
            >
              <Text fontWeight="bold">Lesson Content</Text>
              <Flex gap="2" align="center" fontSize="12px">
                <Text textTransform="uppercase" fontWeight="bold">
                  37% complete
                </Text>
                <Divider
                  orientation="vertical"
                  colorScheme="whiteAlpha"
                  h="20px"
                />
                <Text>0/2 Steps</Text>
              </Flex>
            </Flex>
            <Box p="5">
              <Flex gap="2" align="center">
                <BsCircle />
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, id.
                </Text>
              </Flex>
              <Divider my="4" />
              <Flex gap="2" align="center">
                <BsCircle />
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quae, modi?
                </Text>
              </Flex>
              <Divider my="4" />
              <Flex gap="2" align="center">
                <BsCardChecklist />
                <Text>Checkpoint</Text>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Text textAlign="center" color="#2c698d" fontSize="12px" my="4">
          Back to Course
        </Text>
      </Box>
    </>
  );
};

export default CourseStructure;
