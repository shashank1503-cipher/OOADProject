import { Button, Flex, Heading, Input, Text, useClipboard } from '@chakra-ui/react';
import React from 'react';

const QuizConfirmation = () => {
  const [value, setValue] = React.useState('https://quizly.com/quiz/123');
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <Flex direction={'column'} textAlign={'center'}>
      <Heading size={'4xl'} >Quiz Created </Heading>
      <Heading
        bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mb={10}
      >
        Succesfully
      </Heading>
      <Text>
        Your quiz has been created. You can share it with your friends by
      </Text>
      <Flex  margin={'auto' } mt={10}>
        <Input value={value} isReadOnly placeholder="link" />
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? 'Copied' : 'Copy'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuizConfirmation;
