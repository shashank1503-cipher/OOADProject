import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const DisplayQuestionBox = props => {
  const [answer, setAnswer] = useState('');
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
        Question:- {props.questionName}
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
            <Radio value={props.optionA}>{props.optionA}</Radio>
            <Radio value={props.optionB}>{props.optionB}</Radio>
            <Radio value={props.optionC}>{props.optionC}</Radio>
            <Radio value={props.optionD}>{props.optionD}</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Flex>
  );
};

export default DisplayQuestionBox;
