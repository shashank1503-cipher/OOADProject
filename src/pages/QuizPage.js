import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  Heading,
  Spinner,
} from '@chakra-ui/react';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DisplayQuestionBox from '../components/DisplayQuestionBox';
import GiveQuizContext from '../context/GiveQuizContext';
import { db } from '../firebase';
import { FaCheckCircle } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

const QuizPage = () => {
  let { id } = useParams();
  let { answers, currentQuestionNumber } = useContext(GiveQuizContext);
  let { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attempted, setAttempted] = useState(false);
  let navigate = useNavigate();

  let handleSubmit = async () => {
    let data = { quizId: id, submittedBy: user.email, answers: answers };
    try {
      setIsSubmitting(true);
      let docRef = await addDoc(collection(db, 'submissions'), data);
      navigate(`/results/${id}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    let fetchData = async () => {
      setIsLoading(true);
      console.log('Called');
      try {
        let docSnap = await getDoc(doc(db, 'quizzes', id));

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          setError('Quiz not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    let fetchSubmission = async () => {
      setIsLoading(true);
      try {
        const submissionRef = collection(db, 'submissions');

        const q = query(
          submissionRef,
          where('quizId', '==', id),
          where('submittedBy', '==', user.email)
        );
        const querySnapShot = await getDocs(q);
        if (!querySnapShot.empty) {
          setError('You have already submitted this quiz');
          setAttempted(true);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    fetchSubmission();
  }, []);

  
  return (
    <Flex direction={'column'} textAlign={'center'} minH={'75vh'}>
      {!isLoading ? (
        !error ? (
          currentQuestionNumber < data.numberOfQuestions ? (
            <>
              <Heading
                bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
                mb={10}
              >
                {data.topic}
              </Heading>

              <DisplayQuestionBox
                key={data.questions[currentQuestionNumber].id}
                number={data.questions[currentQuestionNumber].id + 1}
                questionName={data.questions[currentQuestionNumber].question}
                optionA={data.questions[currentQuestionNumber].optionA}
                optionB={data.questions[currentQuestionNumber].optionB}
                optionC={data.questions[currentQuestionNumber].optionC}
                optionD={data.questions[currentQuestionNumber].optionD}
              />
            </>
          ) : (
            <>
              <Heading
                bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
                mb={10}
              >
                {data.topic}
              </Heading>

              <Flex justifyContent={'center'} direction={'column'} mt={20}>
                <Heading>You have finished the quiz.</Heading>
                <Button
                  variant={'solid'}
                  colorScheme={'green'}
                  size={'lg'}
                  leftIcon={<FaCheckCircle />}
                  onClick={handleSubmit}
                  margin={'auto'}
                  mt={10}
                  isLoading={isSubmitting}
                >
                  Submit
                </Button>
              </Flex>
            </>
          )
        ) : (
          <Flex justifyContent={'center'} direction={'column'} margin={'auto'}>
            {attempted ? (
              <>
                <Alert status="success" alignSelf={'center'}>
                  <AlertIcon />
                  <AlertTitle>Woah!</AlertTitle>
                  <AlertDescription>{error} 🙂 </AlertDescription>
                </Alert>
                <Button
                  onClick={() => {
                    navigate(`/results/${id}`);
                  }}
                  size={'lg'}
                  margin={'auto'}
                  mt={10}
                >
                  Go to Results
                </Button>
              </>
            ) : (
              <Alert status="error" alignSelf={'center'}>
                <AlertIcon />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>{error} 😢 </AlertDescription>
              </Alert>
            )}
          </Flex>
        )
      ) : (
        <Flex justifyContent={'center'} minH={'50vh'} align={'center'}>
          <Spinner />
        </Flex>
      )}
    </Flex>
  );
};

export default QuizPage;
