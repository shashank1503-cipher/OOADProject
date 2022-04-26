import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import QuestionBox from '../components/QuestionBox';
import { FaPlusCircle } from 'react-icons/fa';
const CreateQuiz = () => {
  return (
    <Flex direction={'column'} textAlign={'center'}>
      <Heading size={'4xl'}>Create </Heading>
      <Heading
        bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Quiz
      </Heading>
      <Flex margin={'auto'} w={'50%'} boxShadow={'lg'} padding={7}>
        <FormControl>
          <FormLabel htmlFor="topic">Topic</FormLabel>
          <Input id="topic" type="text" />
          <FormHelperText>Topic For Quiz</FormHelperText>
        </FormControl>
      </Flex>
      <QuestionBox number={1} />
      <Button
        variant={'solid'}
        colorScheme={'blue'}
        leftIcon={<FaPlusCircle />}
      />
    </Flex>
  );
};

export default CreateQuiz;
