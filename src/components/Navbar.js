import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Logo from './Logo';

const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'} p={4}>
      <Logo pl={10} fontSize={'3xl'} />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Navbar;
