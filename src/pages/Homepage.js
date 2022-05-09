import { Box, Flex, useToast } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import Hero from '../components/Hero';
import AuthContext from '../context/AuthContext';

const Homepage = () => {
  let { toastTitle, toastMessage, isToast, setIsToast } =
    useContext(AuthContext);
  const toast = useToast();
  useEffect(() => {
    console.log(isToast, toastTitle, toastMessage);
    if (isToast) {
      toast({
        title: toastTitle,
        description: toastMessage,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setIsToast(false);
    }
  }, [isToast, toastMessage, toastTitle, setIsToast, toast]);

  return (
    <Box textAlign="center">
      <Flex direction={'column'} minH={'100vh'}>
        <Hero />
      </Flex>
    </Box>
  );
};

export default Homepage;
