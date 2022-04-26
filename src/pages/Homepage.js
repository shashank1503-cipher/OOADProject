import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Homepage = () => {
  return (
    <Box textAlign="center">
      <Flex direction={'column'} minH={'100vh'}>
        <Hero />
        <Footer />
      </Flex>
    </Box>
  );
};

export default Homepage;
