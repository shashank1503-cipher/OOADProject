import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import StatusIndicatorActive from './StatusIndicatorActive';
import StatusIndicatorInactive from './StatusIndicatorInactive';

export default function QuizBox({ quiz }) {
  return (
    <Center py={6}>
      <Box
        m={2}
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            Quiz {quiz.id}
          </Text>
          <Flex verticalAlign={'center'}>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {quiz.topic}
            </Heading>
            {quiz.statusActive ? (
              <StatusIndicatorActive ml={4} alignSelf={'center'} />
            ) : (
              <StatusIndicatorInactive ml={4} alignSelf={'center'} />
            )}
          </Flex>
          <Text color={'gray.400'}>
            <Text fontWeight={'bold'} color={'gray.100'}>
              No. of Questions
            </Text>
            {quiz.numberOfQuestions}
            <Text fontWeight={'bold'} color={'gray.100'}>
              Duration
            </Text>
            {quiz.duration} Minutes
          </Text>
        </Stack>
        <Flex mt={6} direction={'row'} justifyContent={'space-between'}>
          <Flex>
            <Text alignSelf={'center'}>
              Your Score{' '}
              <Text color={'green.500'} fontWeight={'bold'}>
                {quiz.userScore}
              </Text>
            </Text>
          </Flex>
          <Link to={`/quiz/${quiz.id}`} >
          <Button
            colorScheme={'blue'}
            size={'lg'}
            isDisabled={!quiz.statusActive}
          >
            Give Quiz
          </Button>
          </Link>
        </Flex>
      </Box>
    </Center>
  );
}
