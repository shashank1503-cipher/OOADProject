import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue,
} from '@chakra-ui/react';

import React, { useState, useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import CreateQuizContext from '../context/CreateQuizContext';

const QuestionBox = props => {
  const {
    setQuestionBoxData,
    isError,
    setIsError,
    currentQuestionNumber,
    setCurrentQuestionNumber,
    errorMessage,
    setErrorMessage,
    isSuccessfull,
    setIsSuccessfull,
  } = useContext(CreateQuizContext);
  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [optionD, setOptionD] = useState('');
  const [correctOption, setCorrectOption] = useState('');

  let handleQuestionBoxSubmit = () => {
    if (question && optionA && optionB && optionC && optionD && correctOption) {
      let data = {
        id: props.number - 1,
        question: question,
        optionA: optionA,
        optionB: optionB,
        optionC: optionC,
        optionD: optionD,
        correctOption: correctOption,
      };
      setQuestionBoxData(data);
      setIsError(false);
      setErrorMessage('');
      setIsSuccessfull(true);
    } else {
      setCurrentQuestionNumber(props.number);
      setIsError(true);
      setErrorMessage('Please Fill all the fields');
    }
  };
  console.log(errorMessage);
  return (
    <Box
      boxShadow={'lg'}
      margin={'auto'}
      mt={'4'}
      p={'7'}
      w={'50%'}
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius={'lg'}
    >
      <FormControl>
        <FormLabel htmlFor="question">Question {props.number}</FormLabel>
        <Input
          required
          id="question"
          type="text"
          value={question}
          onChange={e => {
            setQuestion(e.target.value);
          }}
        />
      </FormControl>
      <Flex>
        <FormControl>
          <FormLabel htmlFor="optionA" textAlign={'center'}>
            Option A
          </FormLabel>
          <Input
            required
            id="optionA"
            size={'sm'}
            value={optionA}
            onChange={e => {
              setOptionA(e.target.value);
            }}
            type="text"
            width={'80%'}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="optionB" textAlign={'center'}>
            Option B
          </FormLabel>
          <Input
            required
            id="optionB"
            size={'sm'}
            value={optionB}
            onChange={e => {
              setOptionB(e.target.value);
            }}
            type="text"
            width={'80%'}
          />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="optionC" textAlign={'center'}>
            Option C
          </FormLabel>
          <Input
            required
            id="optionC"
            size={'sm'}
            value={optionC}
            onChange={e => {
              setOptionC(e.target.value);
            }}
            type="text"
            width={'80%'}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="optionD" textAlign={'center'}>
            Option D
          </FormLabel>
          <Input
            required
            id="optionD"
            size={'sm'}
            value={optionD}
            onChange={e => {
              setOptionD(e.target.value);
            }}
            type="text"
            width={'80%'}
          />
        </FormControl>
      </Flex>
      <Flex justifyContent={'space-between'} p={7}>
        <Select
          placeholder="Correct Option"
          w={'25%'}
          value={correctOption}
          onChange={e => {
            setCorrectOption(e.target.value);
          }}
        >
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
          <option value="optionD">Option D</option>
        </Select>
        <Button
          variant={'solid'}
          colorScheme={'red'}
          size={'lg'}
          leftIcon={<FaCheckCircle />}
          onClick={handleQuestionBoxSubmit}
        >
          Done
        </Button>
      </Flex>
      {isError && currentQuestionNumber === props.number ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{errorMessage} 😢 </AlertDescription>
        </Alert>
      ) : (
        <></>
      )}
      {isSuccessfull && currentQuestionNumber === props.number  ? (
        <Alert status="success">
          <AlertIcon />
          Data uploaded to the server. Fire on! 🔥 🔥 🔥
        </Alert>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default QuestionBox;
