import { Flex, Heading, Spinner } from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import QuizBox from '../components/QuizBox';
import { db } from '../firebase';

const Quizzes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let fetchData = async () => {
      setIsLoading(true);
      try {
        let querySnapShot = await getDocs(collection(db, 'quizzes'));
        let Data = [];
        querySnapShot.forEach(doc => {
          let id = doc.id;
          let Doc = { id, ...doc.data() };
          Data.push(Doc);
          console.log(Doc);
          console.log(data);
        });
        setData(Data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    // console.log(data);
  }, []);

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
      {!isLoading ? (
        <Flex p={10} flexWrap={'wrap'} justifyContent={'center'}>
          {data.map(quiz => (
            <QuizBox key={quiz.id} quiz={quiz} />
          ))}
        </Flex>
      ) : (
        <Flex justifyContent={'center'} minH={'50vh'} align={'center'}>
          <Spinner w={50} h={50} />
        </Flex>
      )}
    </Flex>
  );
};

export default Quizzes;
