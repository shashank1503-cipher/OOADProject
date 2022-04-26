import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const QuestionBox = props => {
  return (
    <Box boxShadow={'lg'} margin={'auto'} mt={'4'} p={'7'} w={'50%'}>
      <FormControl>
        <FormLabel htmlFor="question">Question {props.number}</FormLabel>
        <Input id="question" type="text" />
      </FormControl>
      <Flex>
        <FormControl>
          <FormLabel htmlFor="optionA" textAlign={'center'}>
            A
          </FormLabel>
          <Input id="optionA" type="text" width={'80%'} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="optionB" textAlign={'center'}>
            B
          </FormLabel>
          <Input id="optionB" type="text" width={'80%'} />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="optionC" textAlign={'center'}>
            C
          </FormLabel>
          <Input id="optionC" type="text" width={'80%'} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="optionD" textAlign={'center'}>
            D
          </FormLabel>
          <Input id="optionD" type="text" width={'80%'} />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default QuestionBox;
