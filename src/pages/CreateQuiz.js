import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import QuestionBox from '../components/QuestionBox';
import { FaPlusCircle } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import CreateQuizContext from '../context/CreateQuizContext';
import AuthContext from '../context/AuthContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
const CreateQuiz = () => {
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState('');
  const [isTopicError, setIsTopicError] = useState(false);
  const [isDurationError, setIsDurationError] = useState(false);
  const [durationErrorMessage, setDurationErrorMessage] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionErrorMessage, setIsSubmissionErrorMessage] = useState('');
  const {
    questionBoxData,
    setQuestionBoxData,
    setIsError,
    setCurrentQuestionNumber,
    setErrorMessage,
  } = useContext(CreateQuizContext);
  const { user } = useContext(AuthContext);
  console.log(user.displayName, user.email);
  let navigate = useNavigate();

  let handleAdd = () => {
    if (
      questionBoxData.question &&
      questionBoxData.optionA &&
      questionBoxData.optionB &&
      questionBoxData.optionC &&
      questionBoxData.optionD &&
      questionBoxData.correctOption
    ) {
      setNumberOfQuestions(numberOfQuestions + 1);
      questions.push(questionBoxData);
      setQuestions(questions);
      setQuestionBoxData({});
      setIsError(false);
    } else {
      setIsError(true);
      setErrorMessage(
        'Press Done Button to save changes after filling all the fields'
      );

      setCurrentQuestionNumber(numberOfQuestions);
    }
  };
  let addData = async data => {
    setIsSubmitting(true);
    try {
      let docRef = await addDoc(collection(db, 'quizzes'), data);
      navigate('/createsuccess', { state: { id: docRef.id } });
    } catch (err) {
      setIsSubmissionErrorMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  let handleSubmit = () => {
    if (!topic) {
      setIsTopicError(true);
    } else if (!duration) {
      setIsTopicError(false);
      setIsDurationError(true);
      setDurationErrorMessage('Please Enter Duration 🥺');
    } else if (isNaN(duration)) {
      setIsDurationError(true);
      setDurationErrorMessage('Please Enter Valid Duration in Minutes');
    } else {
      setIsTopicError(false);
      setIsDurationError(false);
      if (
        questionBoxData.question &&
        questionBoxData.optionA &&
        questionBoxData.optionB &&
        questionBoxData.optionC &&
        questionBoxData.optionD &&
        questionBoxData.correctOption
      ) {
        questions.push(questionBoxData);
        setQuestions(questions);
        setQuestionBoxData({});
        setIsError(false);
        setErrorMessage('');
        setCurrentQuestionNumber(numberOfQuestions);
        let data = {
          topic: topic,
          duration: parseInt(duration),
          questions: questions,
          createdBy: user.displayName,
          createdByEmail: user.email,
          createdAt: new Date().toLocaleString(),
          numberOfQuestions: numberOfQuestions,
          statusActive: true,
        };
        addData(data);
      } else {
        setIsError(true);
        setErrorMessage(
          'Press Done Button to save changes after filling all the fields'
        );
        setCurrentQuestionNumber(numberOfQuestions);
      }
    }
  };
  console.log(questions);
  return (
    <Flex direction={'column'} textAlign={'center'}>
      <Heading size={'4xl'}>Create </Heading>
      <Heading
        bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mb={10}
      >
        Quiz
      </Heading>
      <Flex
        margin={'auto'}
        w={'50%'}
        boxShadow={'lg'}
        padding={7}
        direction={'column'}
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius={'lg'}
      >
        <FormControl isInvalid={isTopicError}>
          <FormLabel htmlFor="topic">Topic</FormLabel>
          <Input
            id="topic"
            type="text"
            size={'lg'}
            value={topic}
            onChange={e => {
              setTopic(e.target.value);
            }}
          />
          {!isTopicError ? (
            <FormHelperText>Topic For Quiz</FormHelperText>
          ) : (
            <FormErrorMessage>Please Enter Topic 🥺 </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isDurationError}>
          <FormLabel htmlFor="topic">Duration</FormLabel>
          <Input
            id="duration"
            type="text"
            size={'lg'}
            value={duration}
            onChange={e => {
              setDuration(e.target.value);
            }}
            placeholder="Enter Duration in Minutes"
          />
          {!isDurationError ? (
            <FormHelperText>Duration of Quiz</FormHelperText>
          ) : (
            <FormErrorMessage>{durationErrorMessage} </FormErrorMessage>
          )}
        </FormControl>
      </Flex>
      {Array.apply(1, Array(numberOfQuestions)).map(function (x, i) {
        return <QuestionBox number={i + 1} />;
      })}
      {/* <QuestionBox number={1} /> */}
      <Flex justifyContent={'flex-end'} w={'50%'} margin={'auto'} padding={7}>
        <Button
          variant={'solid'}
          colorScheme={'blue'}
          leftIcon={<FaPlusCircle />}
          onClick={handleAdd}
          size={'lg'}
        >
          Add Question
        </Button>
      </Flex>
      <Flex margin={'auto'} p={7} direction={'column'}>
        <Button
          variant={'solid'}
          colorScheme={'green'}
          leftIcon={<IoMdCheckmarkCircleOutline />}
          onClick={handleSubmit}
          margin={'auto'}
          isLoading={isSubmitting}
          size={'lg'}
        >
          Submit
        </Button>
        {submissionErrorMessage ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>{submissionErrorMessage} 😢 </AlertDescription>
          </Alert>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};

export default CreateQuiz;
