import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import QuizBox from '../components/QuizBox';

const Quizzes = () => {
  const data = [
    {
      id: 1,
      topic: 'Frontend Development Assessment',
      duration: 25,
      statusActive: true,
      numberOfQuestions: 25,
      userScore: 25,
    },
    {
      id: 1,
      topic: 'Frontend Development Assessment',
      duration: 25,
      statusActive: true,
      numberOfQuestions: 25,
      userScore: 25,
    },
    {
      id: 1,
      topic: 'Frontend Development Assessment',
      duration: 25,
      statusActive: true,
      numberOfQuestions: 25,
    },
    {
      id: 1,
      topic: 'Frontend Development Assessment',
      duration: 25,
      statusActive: true,
      numberOfQuestions: 25,
    },
    {
      id: 1,
      topic: 'Frontend Development Assessment',
      duration: 25,
      statusActive: true,
      numberOfQuestions: 25,
    },
    {
      id: 1,
      topic: 'Frontend Development Assessment',
      duration: 25,
      statusActive: true,
      numberOfQuestions: 25,
    },
    {
      id: 1,
      topic: 'Frontend Development Assessment',
      duration: 25,
      statusActive: true,
      numberOfQuestions: 25,
    },
  ];
  return (
    <Flex direction={'column'} textAlign={'center'}>
      <Heading size={'4xl'}>Available </Heading>
      <Heading
        bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mb={10}
      >
        Quizzes
      </Heading>
      <Flex p={10} flexWrap={'wrap'} justifyContent={'center'}>
        {data.map(quiz => (
          <QuizBox key={quiz.id} quiz={quiz} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Quizzes;
