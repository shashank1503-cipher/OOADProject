import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { IoIosCreate } from 'react-icons/io';
import { HiOutlineCursorClick } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
const Hero = () => {
  const { colorMode } = useColorMode();
  let navigate = useNavigate();
  return (
    <Flex direction={'column'}>
      <Heading
        size={'4xl'}
        align={'center'}
        justifyContent={'center'}
        p={6}
        pb={2}
      >
        Welcome To
      </Heading>
      <Text
        bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
        bgClip="text"
        fontSize="7xl"
        fontWeight="extrabold"
      >
        Quizly
      </Text>
      <Text fontSize={'2xl'} align={'center'} justifyContent={'center'}>
        Create, share, and take quizzes
      </Text>
      <Flex justifyContent={'center'} m={10}>
        <Link to="/create">
          <Button
            variantColor="blue"
            colorScheme={'blue'}
            rightIcon={<IoIosCreate />}
            mr={10}
            size={'lg'}
          >
            Create Quiz
          </Button>
        </Link>
        <Button
          variantColor="blue"
          colorScheme={'red'}
          rightIcon={<HiOutlineCursorClick />}
          size={'lg'}
        >
          Give Quiz
        </Button>
      </Flex>
      <Flex justifyContent={'center'}>
        <Box
          width={['100%', '100%', '100%', '75%']}
          maxWidth={'1000px'}
          borderRadius={[2, 10, 10, 10]}
          boxShadow={
            colorMode === 'light'
              ? 'rgba(0, 0, 0, 0.75) 0px 7px 29px 0px'
              : 'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px'
          }
          m={10}
        >
          <Image
            src="hero.png"
            alt="Hero Image"
            borderRadius={[2, 10, 10, 10]}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
