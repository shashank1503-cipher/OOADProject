import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <Flex justifyContent={'space-between'} p={10}>
      <Logo fontSize={'3xl'} />
      <Text fontSize={'xl'} verticalAlign={'baseline'}>
        Made with 💝 by Group 2
      </Text>
    </Flex>
  );
};

export default Footer;
