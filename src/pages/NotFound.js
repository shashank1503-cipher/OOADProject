import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const NotFound = () => {
  return (
    <Flex direction={'column'} minH={'75vh'} justifyContent={'center'} align={'center'}>
      <Heading
        bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
        bgClip="text"
        fontSize="8xl"
        fontWeight="extrabold"
        mb={10}
      >
        404
      </Heading>
      <Heading>Page not found</Heading>
    </Flex>
  );
};

export default NotFound;
