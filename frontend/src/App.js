import React from 'react';
import { ChakraProvider, Box, theme, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <Flex direction={'column'} minH={'100vh'}>
          <Navbar />
          <Hero />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
