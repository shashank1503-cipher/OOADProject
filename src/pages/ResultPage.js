import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { async } from '@firebase/util';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { db } from '../firebase';

const ResultPage = () => {
  let { id } = useParams();
  let { user } = useContext(AuthContext);
  const [quizData, setQuizData] = useState({});
  const [submissionData, setSubmissionData] = useState({});
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  let navigate = useNavigate();
  useEffect(() => {
    let fetchQuizData = async () => {
      setIsLoading(true);
      try {
        let docSnap = await getDoc(doc(db, 'quizzes', id));
        setQuizData(docSnap.data());
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    let fetchSubmissionData = async () => {
      setIsLoading(true);
      try {
        const submissionRef = collection(db, 'submissions');
        const q = query(
          submissionRef,
          where('quizId', '==', id),
          where('submittedBy', '==', user.email)
        );
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach(doc => {
          setSubmissionData(doc.data());
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuizData();
    fetchSubmissionData();
  }, []);
  useEffect(() => {
    let calculateResults = () => {
      let CorrectAnswers = 0;
      let IncorrectAnswers = 0;

      if (quizData.questions && submissionData.answers) {
        quizData.questions.forEach(question => {
          if (
            question.correctOption ===
            submissionData.answers[question.id].answer
          ) {
            CorrectAnswers++;
          } else {
            IncorrectAnswers++;
          }
        });
      }
      setCorrectAnswer(CorrectAnswers);
      setWrongAnswer(IncorrectAnswers);
      setScore(CorrectAnswers);
    };
    calculateResults();
  }, [submissionData, quizData]);

  let bgColor = useColorModeValue('white', 'gray.700');
  return (
    <Flex direction={'column'} textAlign={'center'} minH={'75vh'}>
      {!isLoading ? (
        error ? (
          <Flex justifyContent={'center'} direction={'column'} margin={'auto'}>
            <Alert status="error" alignSelf={'center'}>
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{error} 😢 </AlertDescription>
            </Alert>
          </Flex>
        ) : (
          <>
            <Heading
              bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              mb={10}
            >
              {quizData.topic}
            </Heading>
            <Heading>Here are your Results</Heading>
            <Flex direction={'column'}>
              <Box
                boxShadow={'lg'}
                margin={'auto'}
                mt={'4'}
                p={'7'}
                w={'50%'}
                bg={bgColor}
                borderRadius={'lg'}
              >
                <Heading>
                  Your Score :{' '}
                  <Text color={'green.500'}>
                    {score}/{quizData.numberOfQuestions}
                  </Text>
                </Heading>
              </Box>
              <Box
                boxShadow={'lg'}
                margin={'auto'}
                mt={'4'}
                p={'7'}
                w={'50%'}
                bg={bgColor}
                borderRadius={'lg'}
              >
                <CircularProgress
                  value={(score / quizData.numberOfQuestions) * 100}
                  size={'130px'}
                  color={'green.500'}
                >
                  <CircularProgressLabel>
                    {(score / quizData.numberOfQuestions) * 100}%
                  </CircularProgressLabel>
                </CircularProgress>
              </Box>
              <Button
                margin={'auto'}
                size={'lg'}
                mt={10}
                onClick={() => {
                  navigate(`/quizzes`);
                }}
              >
                Give More Quizzes
              </Button>
            </Flex>
          </>
        )
      ) : (
        <Spinner w={50} h={50} />
      )}
    </Flex>
  );
};

export default ResultPage;
