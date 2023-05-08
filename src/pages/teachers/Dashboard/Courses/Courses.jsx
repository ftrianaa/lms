import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Select,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { TfiPencil } from 'react-icons/tfi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex gap="3">
        <InputGroup w="fit-content">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="search-course" placeholder="Search" />
        </InputGroup>
        <Select w="fit-content">
          <option>All courses</option>
          <option>New courses</option>
        </Select>
        <Select w="fit-content">
          <option>All categories</option>
          <option>New courses</option>
        </Select>
        <Select w="fit-content">
          <option>All authors</option>
          <option>New authors</option>
        </Select>
      </Flex>
      <Tag color="white" bgColor="#2c698d" my="5">
        Showing 1 courses
      </Tag>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Author</Th>
                <Th>Categories</Th>
                <Th>Learners</Th>
                <Th>Created</Th>
                <Th>Updated</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-W6CbBQEEsX3mrCgYAOdTY0wvYqhZtkOd79QvMcQAsg&s"
                    alt="img-course"
                    w="100px"
                    maxH="200px"
                  />
                </Td>
                <Td>User1</Td>
                <Td>New Courses</Td>
                <Td>2</Td>
                <Td>02 Februari 2023</Td>
                <Td>08 Mei 2023</Td>
                <Td>
                  <Flex gap="2">
                    <Tooltip label="Edit" fontSize="md">
                      <Button
                        size="sm"
                        onClick={() => navigate('/teacher/courses/edit')}
                      >
                        <TfiPencil />
                      </Button>
                    </Tooltip>
                    <Popover islazy trigger={'hover'}>
                      <PopoverTrigger>
                        <Button size="sm">
                          <FiMoreHorizontal />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent bgColor="#2c698d" w="100%" color="white">
                        <PopoverArrow bgColor="#2c698d" />
                        <PopoverBody>
                          <Flex flexDir="column" gap="3">
                            <Link>Copy course URL</Link>
                            <Link>Copy course ID</Link>
                            <Link>Clone course</Link>
                            <Link>Delete course</Link>
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

const CoursePage = () => {
  return (
    <Sidebar>
      <Courses />
    </Sidebar>
  );
};
export default CoursePage;
