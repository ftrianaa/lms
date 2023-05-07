import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  PopoverBody,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { BsDoorOpenFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex
      align="center"
      justify="space-between"
      bgColor="white"
      borderBottom="1px solid #ababab"
      h="90px"
      px="10"
    >
      <Image
        src="https://demo.learndash.com/wp-content/uploads/2022/04/learndash-demo-logo-1.svg"
        alt="logo"
        h="20px"
      />
      <Spacer />
      <Flex gap="5">
        <Link onClick={() => navigate('/courses')}>Courses</Link>
        <Link onClick={() => navigate('/')}>After login</Link>
        <Popover islazy trigger={'hover'}>
          <PopoverTrigger>
            <Flex align="center">
              <Link>Apps</Link>
              <ChevronDownIcon />
            </Flex>
          </PopoverTrigger>
          <PopoverContent bgColor="#2c698d" w="100%" color="white">
            <PopoverArrow bgColor="#2c698d" />
            <PopoverBody>
              <Flex flexDir="column" gap="3">
                <Link onClick={() => navigate('/news')}>Daily News</Link>
                <Link onClick={() => navigate('/people')}>Other Students</Link>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover islazy trigger={'hover'}>
          <PopoverTrigger>
            <Flex align="center">
              <Link>Me</Link>
              <ChevronDownIcon />
            </Flex>
          </PopoverTrigger>
          <PopoverContent bgColor="#2c698d" w="100%" color="white">
            <PopoverArrow bgColor="#2c698d" />
            <PopoverBody>
              <Flex flexDir="column" gap="3">
                <Link onClick={() => navigate('/inbox')}>Inbox</Link>
                <Link onClick={() => navigate('/profile')}>Profile</Link>
                <Link onClick={() => navigate('/account')}>Account</Link>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Spacer />
      <Flex align="center" gap="2">
        <BsDoorOpenFill />
        <Link onClick={() => navigate('/login')}>Log Out</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
