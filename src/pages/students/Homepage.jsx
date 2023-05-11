import React from 'react';
import Header from '../../components/students/Header';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { EmailIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Flex h="75vh" flexDir="column" align="center" justify="center" gap="10">
        <Heading>Hi, pulu</Heading>
        <Button size="lg" bgColor="#2c698d" color="white" colorScheme="blue">
          Visit profile
        </Button>
      </Flex>
      <Box bgColor="#272643">
        <HStack
          divider={<StackDivider />}
          justify="center"
          align="center"
          w="100%"
          gap="10"
          h="80px"
          textAlign="center"
          color="white"
          fontWeight="bold"
          textTransform="uppercase"
        >
          <Box>
            <Text>0</Text>
            <Text>Courses</Text>
          </Box>
          <Box>
            <Text>0</Text>
            <Text>Hourses</Text>
          </Box>
          <Box>
            <Text>0</Text>
            <Text>Posts</Text>
          </Box>
          <Box>
            <Text>0</Text>
            <Text>Certicates</Text>
          </Box>
          <Box>
            <EmailIcon />
            <Text>Messages</Text>
          </Box>
        </HStack>
      </Box>
      <Box px="10">
        <Text fontSize="48px" fontWeight="bold" textAlign="center">
          Courses
        </Text>
        <Flex align="center" justify="space-between">
          <InputGroup w="30%">
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="gray" />}
            />
            <Input type="tel" placeholder="search course" />
          </InputGroup>

          <HStack>
            <Text>all</Text>
            <Text>my</Text>
            <Text>not enrolled</Text>
            <Text>newest</Text>
            <Text>popular</Text>
          </HStack>
        </Flex>
        <Flex my="10" gap="2" flexWrap="wrap" align="center" justify="center">
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                bgColor="#2c698d"
                colorScheme="blue"
                w="100%"
                onClick={() => navigate('/courses')}
              >
                Enroll
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                bgColor="#2c698d"
                colorScheme="blue"
                w="100%"
                onClick={() => navigate('/courses')}
              >
                Enroll
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                bgColor="#2c698d"
                colorScheme="blue"
                w="100%"
                onClick={() => navigate('/courses')}
              >
                Enroll
              </Button>
            </CardFooter>
          </Card>
        </Flex>
        <Text textAlign="center" my="10">
          There are no available courses yet.
        </Text>
      </Box>
    </>
  );
};

export default Homepage;
