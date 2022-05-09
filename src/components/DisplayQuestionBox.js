import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import GiveQuizContext from '../context/GiveQuizContext';
import { FaCheckCircle } from 'react-icons/fa';

const DisplayQuestionBox = props => {
  let { answers, setAnswers, setCurrentQuestionNumber } =
    useContext(GiveQuizContext);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  let handleSave = () => {
    if (answer) {
      let data = {
        id: props.number - 1,
        answer: answer,
      };
      let newAnswers = [...answers, data];
      setAnswers(newAnswers);
      setError('');
      setCurrentQuestionNumber(props.number);
    } else {
      setError('Please select an answer');
    }
    console.log(answers);
  };
  return (
    <Flex direction={'column'}>
      <Box
        boxShadow={'lg'}
        margin={'auto'}
        mt={'4'}
        p={'7'}
        w={'50%'}
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius={'lg'}
      >
        Question {props.number}:- {props.questionName}
      </Box>
      <Box
        boxShadow={'lg'}
        margin={'auto'}
        mt={'4'}
        p={'7'}
        w={'50%'}
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius={'lg'}
      >
        <RadioGroup onChange={setAnswer} value={answer}>
          <Stack direction="column">
            <Radio value={'optionA'}>{props.optionA}</Radio>
            <Radio value={'optionB'}>{props.optionB}</Radio>
            <Radio value={'optionC'}>{props.optionC}</Radio>
            <Radio value={'optionD'}>{props.optionD}</Radio>
          </Stack>
        </RadioGroup>
        <Button
          variant={'solid'}
          colorScheme={'red'}
          size={'lg'}
          leftIcon={<FaCheckCircle />}
          onClick={handleSave}
        >
          Next
        </Button>
        {error ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>{error} 😢 </AlertDescription>
          </Alert>
        ) : (
          <></>
        )}
      </Box>
    </Flex>
  );
};

export default DisplayQuestionBox;
