import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import DisplayQuestionBox from '../components/DisplayQuestionBox';

const QuizPage = () => {
  let { id } = useParams();

  return (
    <Flex direction={'column'} textAlign={'center'} minH={'100vh'}>
      <Heading
        bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mb={10}
        
      >
        Frontend Development Assessment
      </Heading>
      <DisplayQuestionBox
        questionName={'What is the name of the current JavaScript version?'}
        optionA={'ES5'}
        optionB={'ES6'}
        optionC={'ES7'}
        optionD={'ES8'}
      />
    </Flex>
  );
};

export default QuizPage;
