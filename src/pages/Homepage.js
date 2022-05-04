import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Hero from '../components/Hero';

const Homepage = () => {
  return (
    <Box textAlign="center">
      <Flex direction={'column'} minH={'100vh'}>
        <Hero />
      </Flex>
    </Box>
  );
};

export default Homepage;
