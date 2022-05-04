import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Logo from './Logo';

const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'} p={4}>
      <Logo pl={10} fontSize={'3xl'} />
      <Flex>
        <Link to="/signup">
          <Button variant={'outline'} mr={5}>
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          <Button variant={'outline'} mr={5}>
            Login
          </Button>
        </Link>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};

export default Navbar;
